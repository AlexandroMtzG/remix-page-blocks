import HintTooltip from "./HintTooltip";

export default function PreviewTooltips() {
  return (
    <div id="tabs" className="space-y-6">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <label className="flex items-start space-x-1">
          <span>Text</span> <HintTooltip text="Help text" />
        </label>
      </div>
    </div>
  );
}
