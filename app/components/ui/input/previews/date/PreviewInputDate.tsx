import InputDate from "~/components/ui/input/InputDate";

export default function PreviewInputDate() {
  return (
    <div id="input-date">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <InputDate name="name" title="Title" />
      </div>
    </div>
  );
}
