import { useState } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import CommandPalette from "./CommandPalette";

export default function PreviewCommandPalettes() {
  const [open, setOpen] = useState(false);
  return (
    <div id="buttons">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <div id="buttons" className="w-full space-y-2">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 sm:flex-row sm:items-end sm:justify-center sm:space-y-0 sm:space-x-4">
            <ButtonPrimary onClick={() => setOpen(true)}>Show command palette</ButtonPrimary>
          </div>
          <CommandPalette
            isOpen={open}
            onClosed={() => setOpen(false)}
            commands={[
              {
                command: "1",
                title: "Title 1",
                description: "Description #1",
                onSelected: () => alert("Selected command #1"),
              },
              {
                command: "2",
                title: "Title 2",
                description: "Description 2",
                onSelected: () => alert("Selected command #2"),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
