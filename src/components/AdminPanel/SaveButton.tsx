import { Check, Loader2 } from "lucide-react";

import { Button } from "../ui/button";

export default function SaveButton({
  state,
  onClick,
  label = "Save changes",
  size,
}: {
  state: "idle" | "saving" | "saved";
  onClick: () => Promise<void>;
  label?: string;
  size?: "default" | "sm";
}) {
  return (
    <Button
      onClick={onClick}
      disabled={state === "saving"}
      size={size}
      className="cursor-pointer"
    >
      {state === "saving" && <Loader2 className="h-4 w-4 animate-spin" />}
      {state === "saved" && <Check className="h-4 w-4" />}
      {state === "saving" ? "Saving…" : state === "saved" ? "Saved" : label}
    </Button>
  );
}
