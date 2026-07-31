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
import { response } from "@/app/dashboard/actions";
import ErrorMessage from "./ErrorMessage";

function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10); // strip everything but digits, cap at 10

  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function ContactPanel({
  initialContact,
  saveContact,
}: {
  initialContact: contact;
  saveContact: (contact: contact) => Promise<response>;
}) {
  const [contact, setContact] = useState(initialContact);
  const [saveState, save, res] = useSaveState();
  const update =
    (key: keyof contact) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setContact((c) => ({ ...c, [key]: e.target.value }));

  const updatePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact((c) => ({ ...c, phone: formatPhoneNumber(e.target.value) }));
  };

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
          <Label htmlFor="instagram">Instagram</Label>
          <Input
            id="instagram"
            value={contact.insta}
            onChange={update("insta")}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={contact.phone} onChange={updatePhone} />
        </div>
        <div></div>
        <ErrorMessage res={res} />
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
