import clsx from "clsx";
import { useTransition } from "@remix-run/react";

interface Props {
  small?: boolean;
  loading?: boolean;
}
export default function Loading({ small = false, loading }: Props) {
  const transition = useTransition();
  return (
    <>
      {(transition.state === "submitting" || transition.state === "loading" || loading) && (
        <div className="space-y-2 pt-4 pb-4 text-center">
          <div className={clsx("flex h-auto w-full flex-col justify-center space-y-4 py-12 text-center", small && "py-2")}>
            <div
              className={clsx("loader mx-auto rounded-full border-slate-200 ease-linear", small ? "h-10 w-10 border-t-4" : "h-20 w-20 border-8 border-t-8")}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}
