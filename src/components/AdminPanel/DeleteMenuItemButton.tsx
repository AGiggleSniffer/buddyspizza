"use client";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import useSaveState from "@/hooks/useSaveState";
import type { response } from "@/app/dashboard/actions";

export default function DeleteMenuItemButton({
  item,
  onDelete,
}: {
  item: string;
  onDelete: (item: string) => Promise<response>;
}) {
  const [open, setOpen] = useState(false);
  const [state, trigger, result] = useSaveState();

  useEffect(() => {
    if (state === "saved" && !result) {
      setTimeout(() => {
        setOpen(false);
      }, 6000);
    }
  }, [state, result]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Delete ${item}`}
          className="hover:bg-red-50 hover:text-red-600"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete &quot;{item}&quot;?</AlertDialogTitle>
          <AlertDialogDescription>
            This removes the item from your menu immediately. This can&apos;t be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        {result && !result.success && (
          <p className="text-sm text-red-600">{result?.errorMsg}</p>
        )}
        <AlertDialogFooter>
          <AlertDialogCancel disabled={state === "saving"}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              trigger(() => onDelete(item));
            }}
            disabled={state === "saving"}
            className="bg-red-600 hover:bg-red-700"
          >
            {state === "saving" && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            {state === "saving" ? "Deleting…" : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
