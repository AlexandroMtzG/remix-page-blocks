import InputSelect from "~/components/ui/input/InputSelect";

export default function PreviewInputSelect() {
  return (
    <div id="input-select">
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
            {
              name: "Option 3",
              value: "3",
              disabled: true,
            },
          ]}
        />
      </div>
    </div>
  );
}
