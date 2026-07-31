import { useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { menu } from "@/server/db/schema/schema";
import { response } from "@/app/dashboard/actions";
import useSaveState from "@/hooks/useSaveState";
import SaveButton from "./SaveButton";

interface props {
  initialMenu: menu[];
  addMenuItem: (
    item: Omit<menu, "id" | "createdAt" | "updatedAt">,
  ) => Promise<response>;
  updateMenuItem: (originalItem: string, item: menu) => Promise<response>;
  removeMenuItem: (item: string) => Promise<response>;
}

export default function MenuPanel({
  initialMenu,
  addMenuItem,
  updateMenuItem,
  removeMenuItem,
}: props) {
  const { item, description, price } = initialMenu;
  const [menu, setMenu] = useState({ item, description, price });
  const [editingIdx, setEditingIdx] = useState<number | null>(null);
  const [draft, setDraft] = useState<Omit<
    menu,
    "id" | "createdAt" | "updatedAt"
  > | null>(null);
  const [saveState, save, err] = useSaveState();

  const startAdd = () => {
    setDraft({ item: "", price: "0", description: "" });
    setEditingIdx(-1);
  };
  const startEdit = (idx: number) => {
    setDraft({ ...menu[idx] });
    setEditingIdx(idx);
  };
  const cancel = () => {
    setDraft(null);
    setEditingIdx(null);
  };
  const remove = (idx: number) => {
    // setMenu((m) => m.filter((_, i) => i !== idx));
  };

  const commit = async () => {
    await save(async () => {
      if (editingIdx === -1) {
        setMenu((m) => [...m, draft]);
      } else {
        setMenu((m) => m.map((row, i) => (i === editingIdx ? draft : row)));
      }

      if (!draft) {
        throw new Error("Something went wrong");
      }

      return addMenuItem(draft);
    });
    cancel();
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle>Menu</CardTitle>
          <CardDescription>Items, prices, and descriptions.</CardDescription>
        </div>
        <Button variant="outline" size="sm" onClick={startAdd}>
          <Plus className="h-4 w-4" /> Add item
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {draft && (
          <Card className="">
            <CardContent className="grid gap-3 pt-6 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="item">Item</Label>
                <Input
                  id="item"
                  value={draft.item}
                  onChange={(e) => setDraft({ ...draft, item: e.target.value })}
                />
              </div>
              {/* <div className="space-y-1.5">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  className="font-mono"
                  value={draft.price}
                  onChange={(e) =>
                    setDraft({ ...draft, price: e.target.value })
                  }
                />
              </div> */}
              <div className="space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={draft.description}
                  onChange={(e) =>
                    setDraft({ ...draft, description: e.target.value })
                  }
                />
              </div>
            </CardContent>
            <CardFooter className="justify-end gap-2">
              <Button variant="ghost" onClick={cancel}>
                Cancel
              </Button>
              <SaveButton
                state={saveState}
                onClick={commit}
                label="Save item"
              />
            </CardFooter>
          </Card>
        )}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              {/* <TableHead>Category</TableHead> */}
              {/* <TableHead>Price</TableHead> */}
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {menu.map((row, idx) => (
              <TableRow key={row.item + idx}>
                <TableCell className="font-medium">{row.item}</TableCell>
                {/* <TableCell className="font-mono">${row.price}</TableCell> */}
                <TableCell className="text-muted-foreground">
                  {row.description}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => startEdit(idx)}
                      aria-label={`Edit ${row.item}`}
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => remove(idx)}
                      aria-label={`Delete ${row.item}`}
                      className="hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {menu.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-muted-foreground py-8 text-center text-sm"
                >
                  No menu items yet — add one to get started.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
