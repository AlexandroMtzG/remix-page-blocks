import { useState } from "react";
import InputCheckbox from "./InputCheckbox";
import InputDate from "./InputDate";
import InputNumber from "./InputNumber";
import InputRadioGroup from "./InputRadioGroup";
import InputSelect from "./InputSelect";
import InputSelector from "./InputSelector";
import InputText from "./InputText";

export default function PreviewInputs() {
  const [selectedOption, setSelectedOption] = useState<string | number | undefined>("");
  return (
    <div id="inputs" className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-sm font-medium">Input - Text</h3>
        <div id="text" className=" space-y-3 border border-dashed border-gray-300 px-10 py-12 lg:px-64">
          <InputText name="input-text" title="InputText - Simple" />
          <InputText name="input-text" title="InputText - With Hint" hint={<div>Hint</div>} />
          <InputText name="input-text" title="InputText - With Help Tooltip" help="Sample help text" />
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium">Input - Number</h3>
        <div id="number" className=" space-y-3 border border-dashed border-gray-300 px-10 py-12 lg:px-64">
          <InputNumber name="input-number" title="InputNumber - Simple" />
          <InputNumber name="input-number-with-help" title="InputNumber - With Hint" hint={<div>Hint</div>} />
          <InputNumber name="input-number-with-help" title="InputNumber - With Help Tooltip" help="Sample help text" />
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium">Input - Select</h3>
        <div id="select" className=" space-y-3 border border-dashed border-gray-300 px-10 py-12 lg:px-64">
          <InputSelect
            name="input-select"
            title="Simple"
            options={[
              { value: "1", name: "Option 1" },
              { value: "2", name: "Option 2" },
            ]}
            value={2}
          />

          <InputSelect
            name="input-select"
            title="Simple"
            options={[
              { value: "1", name: "Option 1" },
              { value: "2", name: "Option 2" },
            ]}
            value={2}
          />

          <div>
            <InputSelector
              name="input-selector"
              title="Custom"
              options={[
                { value: "1", name: "Option 1" },
                { value: "2", name: "Option 2" },
              ]}
            />
          </div>

          {/* <div>
            <InputSelector
              name="input-selector-with-search"
              title="Custom With Search"
              options={[
                { value: "1", name: "Option 1" },
                { value: "2", name: "Option 2" },
              ]}
              withSearch={true}
            />
          </div>

          <div>
            <InputSelector
              name="input-selector-with-search-and-new-button"
              title="Custom With Search and New Button"
              options={[
                { value: "1", name: "Option 1" },
                { value: "2", name: "Option 2" },
              ]}
              withSearch={true}
              onNew={() => alert("New button clicked")}
              value={selectedOption}
              setValue={setSelectedOption}
            />
          </div> */}
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium">Input - Radio Group</h3>
        <div id="radio" className=" border border-dashed border-gray-300 px-10 py-12 lg:px-64">
          <InputRadioGroup
            name="input-radio-group"
            title="InputRadioGroup"
            value={selectedOption}
            setValue={setSelectedOption}
            options={[
              { value: "1", name: "Option 1" },
              { value: "2", name: "Option 2" },
              { value: "3", name: "Option 3", disabled: true },
            ]}
          />
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium">Input - Date</h3>
        <div id="checkbox" className=" space-y-3 border border-dashed border-gray-300 px-10 py-12 lg:px-64">
          <InputCheckbox name="input-check" title="InputCheckbox - Simple" />
          <InputCheckbox name="input-check-as-toggle" title="InputCheckbox - as Toggle" asToggle={true} />
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium">Input - Date</h3>
        <div id="date" className=" border border-dashed border-gray-300 px-10 py-12 lg:px-64">
          <InputDate name="input-date" title="InputDate" />
        </div>
      </div>
    </div>
  );
}
