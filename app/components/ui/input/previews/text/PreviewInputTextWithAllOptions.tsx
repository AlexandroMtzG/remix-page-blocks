import { useState } from "react";
import InputText from "~/components/ui/input/InputText";

export default function PreviewInputTextWithAllOptions() {
  const [value, setValue] = useState("");
  return (
    <div id="input-text-with-all-options">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <InputText name="name" title="Title" value={value} setValue={setValue} minLength={0} maxLength={10} required uppercase />
      </div>
    </div>
  );
}
