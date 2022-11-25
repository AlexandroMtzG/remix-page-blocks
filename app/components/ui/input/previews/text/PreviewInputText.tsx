import InputText from "~/components/ui/input/InputText";

export default function PreviewInputText() {
  return (
    <div id="input-text">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <InputText name="name" title="Title" />
      </div>
    </div>
  );
}
