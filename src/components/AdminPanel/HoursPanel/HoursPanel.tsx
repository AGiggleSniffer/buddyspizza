import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import SaveButton from "../SaveButton";
import { time } from "@/server/db/schema/schema";
import { response } from "@/app/dashboard/actions";
import { TimePicker } from "./TimePicker";
import useSaveState from "@/hooks/useSaveState";
import ErrorMessage from "../ErrorMessage";

export default function HoursPanel({
  initialTime,
  saveTime,
}: {
  initialTime: time[];
  saveTime: (day: string, time: time) => Promise<response>;
}) {
  const sanitizedTime = () => {
    return initialTime.map((t) => ({
      ...t,
      start: t.start.slice(0, 5),
      end: t.end.slice(0, 5),
    }));
  };

  const [time, setTime] = useState(sanitizedTime);
  const [saveState, save, res] = useSaveState();

  const updateRow = (day: string, patch: Partial<time>) => {
    console.log("updateRow", day, patch);
    return setTime((rows) =>
      rows.map((r) => (r.day === day ? { ...r, ...patch } : r)),
    );
  };

  const saveAllRows = async () => {
    console.log(time);
    const res = await Promise.all(
      time.map(async (t) => {
        return saveTime(t.day, t);
      }),
    );
    const result = res.map((r) => r.errorMsg).join("\n");
    return { success: true, errorMsg: result } as response;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hours</CardTitle>
        <CardDescription>Open and close times by day.</CardDescription>
      </CardHeader>
      <CardContent className="">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Day</TableHead>
              <TableHead>Open</TableHead>
              <TableHead>Close</TableHead>
              <TableHead className="text-center">Closed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.values(time).map(({ day, start, end, closed }) => (
              <TableRow key={day}>
                <TableCell className="font-medium">{day}</TableCell>
                <TableCell>
                  <Input
                    type="time"
                    disabled={closed}
                    value={start}
                    onChange={(e) => updateRow(day, { start: e.target.value })}
                    className="text-center"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="time"
                    disabled={closed}
                    value={end}
                    onChange={(e) => updateRow(day, { end: e.target.value })}
                    className="text-center"
                  />
                </TableCell>
                <TableCell className="!pr-2 text-center">
                  <Checkbox
                    className="mx-auto"
                    checked={closed}
                    onCheckedChange={(checked) =>
                      updateRow(day, { closed: !!checked })
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <ErrorMessage res={res} />
        </Table>
      </CardContent>
      <CardFooter className="justify-end">
        <SaveButton
          state={saveState}
          onClick={() => save(() => saveAllRows())}
          label="Save Changes"
          size="sm"
        />
      </CardFooter>
    </Card>
  );
}
