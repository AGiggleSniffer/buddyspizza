import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SaveButton from "./SaveButton";
import useSaveState from "@/hooks/useSaveState";
import { contact } from "@/server/db/schema/schema";

export default function ContactPanel({ 
    initialContact, 
    saveContact 
}: {
  initialContact: contact;
  saveContact: (contact: contact) => void;
}) {
  const [contact, setContact] = useState(initialContact);
  const [saveState, save] = useSaveState();
  const update = (key: keyof contact) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact((c) => ({ ...c, [key]: e.target.value }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact</CardTitle>
        <CardDescription>How customers reach you.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" value={contact.email} onChange={update("email")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={contact.phone} onChange={update("phone")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="instagram">Instagram</Label>
          <Input
            id="instagram"
            value={contact.insta}
            onChange={update("insta")}
          />
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <SaveButton
          state={saveState}
          onClick={() => save(() => saveContact(contact))}
        />
      </CardFooter>
    </Card>
  );
}
