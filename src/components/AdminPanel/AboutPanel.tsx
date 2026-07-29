import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useState } from "react";
import useSaveState from "@/hooks/useSaveState";
import SaveButton from "./SaveButton";
import { getAbout, patchAbout } from "@/server/queries";

export default async function AboutPanel() {
  const [description, setDescription] = useState(await getAbout());
  const [saveState, save] = useSaveState();

  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
        <CardDescription>
          The description shown on your site's about section.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-1.5">
        <Label htmlFor="about-desc">Description</Label>
        <Textarea
          id="about-desc"
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none"
        />
        <p className="text-muted-foreground text-xs">
          {description.length} characters
        </p>
      </CardContent>
      <CardFooter className="justify-end">
        <SaveButton
          size="default"
          state={saveState}
          onClick={() => save(() => patchAbout(description))}
        />
      </CardFooter>
    </Card>
  );
}
