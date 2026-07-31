"use client";
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
import ErrorMessage from "./ErrorMessage";
import { response } from "@/app/dashboard/actions";

export default function AddressPanel({
  initialAddress,
  saveAddress,
}: {
  initialAddress: address;
  saveAddress: (address: address) => Promise<response>;
}) {
  const [address, setAddress] = useState(initialAddress);
  const [saveState, save, err] = useSaveState();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Address</CardTitle>
        <CardDescription>
          Your restaurant&apos;s physical location.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="street">Street</Label>
          <Input
            id="street"
            value={address.street}
            onChange={(e) => {
              console.log("WORKING", e.target.value);
              setAddress((a) => ({ ...a, street: e.target.value }));
            }}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            value={address.city}
            onChange={(e) =>
              setAddress((a) => ({ ...a, city: e.target.value }))
            }
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="state">State Code</Label>
          <Input
            id="state"
            value={address.stateCode}
            onChange={(e) =>
              setAddress((a) => ({ ...a, stateCode: e.target.value }))
            }
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="zip">ZIP</Label>
          <Input
            id="zip"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={address.zip}
            onChange={(e) =>
              setAddress((a) => ({ ...a, zip: +e.target.value }))
            }
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="mapsrc">Map URL</Label>
          <Input
            id="mapsrc"
            value={address.mapsrc}
            onChange={(e) =>
              setAddress((a) => ({ ...a, mapsrc: e.target.value }))
            }
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="name">Location Name</Label>
          <Input
            id="name"
            value={address.name}
            onChange={(e) =>
              setAddress((a) => ({ ...a, name: e.target.value }))
            }
          />
        </div>
        <ErrorMessage res={err} />
      </CardContent>
      <CardFooter className="justify-end">
        <SaveButton
          state={saveState}
          onClick={() => save(() => saveAddress(address))}
        />
      </CardFooter>
    </Card>
  );
}
