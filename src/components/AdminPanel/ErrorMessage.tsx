import { response } from "@/app/dashboard/actions";

export default function ErrorMessage({ res }: { res: response | null }) {
  return (
    <>
      {res?.success == !true && (
        <p className="text-destructive text-sm whitespace-pre-wrap">
          {res.errorMsg}
        </p>
      )}
    </>
  );
}
