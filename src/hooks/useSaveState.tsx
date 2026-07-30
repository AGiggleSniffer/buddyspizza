import { response } from "@/app/dashboard/actions";
import { useState } from "react";

export default function useSaveState(): [
  state: "idle" | "saving" | "saved",
  trigger: (fn: () => Promise<response>) => Promise<void>,
  response: response,
] {
  const [state, setState] = useState<"idle" | "saving" | "saved">("idle");
  const [response, setResponse] = useState<response | null>(null);
  const trigger = async (fn: () => Promise<response>): Promise<void> => {
    setResponse(null);
    setState("saving");
    const res = await fn();
    if (!res.success) {
      setResponse(res);
    } else {
      setResponse({ success: true });
    }
    
    setState("saved");
    setTimeout(() => setState("idle"), 1600);
  };
  return [state, trigger, response];
}
