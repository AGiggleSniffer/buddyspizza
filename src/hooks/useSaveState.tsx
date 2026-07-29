import { useState } from "react";

export default function useSaveState(): [
  state: "idle" | "saving" | "saved",
  trigger: (fn: () => void) => Promise<void>,
] {
  const [state, setState] = useState<"idle" | "saving" | "saved">("idle"); // idle | saving | saved
  const trigger = async (fn: () => void): Promise<void> => {
    setState("saving");
    await fn?.();
    await new Promise((r) => setTimeout(r, 500)); // simulate network latency
    setState("saved");
    setTimeout(() => setState("idle"), 1600);
  };
  return [state, trigger];
}
