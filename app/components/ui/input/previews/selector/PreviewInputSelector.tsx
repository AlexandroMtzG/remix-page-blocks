import InputSelector from "~/components/ui/input/InputSelector";

export default function PreviewInputSelector() {
  return (
    <div id="input-selector">
      <div className="not-prose border border-dashed border-gray-300 bg-white p-6">
        <InputSelector
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
        />
      </div>
    </div>
  );
}
