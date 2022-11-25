import InputNumber from "~/components/ui/input/InputNumber";

export default function PreviewInputNumber() {
  return (
    <div id="input-number">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <InputNumber name="name" title="Title" />
      </div>
    </div>
  );
}
