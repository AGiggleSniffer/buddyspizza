import { useState } from "react";
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
import { address } from "@/server/db/schema/schema";
import SaveButton from "./SaveButton";
import useSaveState from "@/hooks/useSaveState";

export default function AddressPanel({
  initialAddress,
  saveAddress,
}: {
  initialAddress: address;
  saveAddress: (address: address) => void;
}) {
  const [address, setAddress] = useState(initialAddress);
  const [saveState, save, err] = useSaveState();
  const update = (key: keyof address) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress((a) => ({ ...a, [key]: e.target.value }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Address</CardTitle>
        <CardDescription>Your restaurant&apos;s physical location.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="street">Street</Label>
          <Input
            id="street"
            value={address.street}
            onChange={update("street")}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="city">City</Label>
          <Input id="city" value={address.city} onChange={update("city")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="state">State</Label>
          <Input id="state" value={address.state} onChange={update("state")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="zip">ZIP</Label>
          <Input id="zip" value={address.zip} onChange={update("zip")} />
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <SaveButton state={saveState} onClick={() => save(() => saveAddress(address))} />
      </CardFooter>
    </Card>
  );
}
