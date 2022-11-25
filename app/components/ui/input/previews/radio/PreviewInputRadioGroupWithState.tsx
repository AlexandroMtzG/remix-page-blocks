import { useState } from "react";
import InputRadioGroup from "~/components/ui/input/InputRadioGroup";

type SelectType = string | number | undefined;
export default function PreviewInputRadioGroupWithState() {
  const [value, setValue] = useState<SelectType>(2);
  return (
    <div id="input-radio-group-with-state">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <InputRadioGroup
          name="name"
          title="Title"
          options={[
            {
              name: "Option 1",
              value: 1,
            },
            {
              name: "Option 2",
              value: 2,
            },
            {
              name: "Option 3",
              value: 3,
              disabled: true,
            },
          ]}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
}
