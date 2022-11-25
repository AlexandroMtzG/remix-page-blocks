import { useState } from "react";
import InputSelect from "~/components/ui/input/InputSelect";

type SelectType = string | number | undefined;
export default function PreviewInputSelectWithState() {
  const [value, setValue] = useState<SelectType>("2");
  return (
    <div id="input-select-with-state">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <InputSelect
          name="name"
          title="Title"
          options={[
            {
              name: "Option 1",
              value: "1",
            },
            {
              name: "Option 2",
              value: "2",
            },
          ]}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
}
