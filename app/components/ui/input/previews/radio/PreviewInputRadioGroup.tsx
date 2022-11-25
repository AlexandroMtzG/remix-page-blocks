import InputRadioGroup from "~/components/ui/input/InputRadioGroup";

export default function PreviewInputRadioGroup() {
  return (
    <div id="input-radio-group">
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
        />
      </div>
    </div>
  );
}
