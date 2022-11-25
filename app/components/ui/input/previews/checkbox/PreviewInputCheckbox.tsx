import InputCheckbox from "~/components/ui/input/InputCheckbox";

export default function PreviewInputCheckbox() {
  return (
    <div id="input-checkbox">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <InputCheckbox name="name" title="Title" />
      </div>
    </div>
  );
}
