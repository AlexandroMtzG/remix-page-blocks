import { useState } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import FloatingLoader from "./FloatingLoader";

export default function PreviewFloatingLoader() {
  const [open, setOpen] = useState(false);
  return (
    <div id="floating-loader">
      <div className="not-prose border border-dashed border-gray-300 bg-white p-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 sm:flex-row sm:items-end sm:justify-center sm:space-y-0 sm:space-x-4">
          <ButtonPrimary onClick={() => setOpen(!open)}>{open ? "Hide floating loader" : "Show floating loader"}</ButtonPrimary>
          <FloatingLoader loading={open} />
        </div>
      </div>
    </div>
  );
}
