import PreviewTabsAsButtons from "./PreviewTabsAsButtons";
import PreviewTabsAsLinks from "./PreviewTabsAsLinks";

export default function PreviewTabs() {
  return (
    <div id="tabs" className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-sm font-medium">Tab - as Links</h3>
        <div className="flex items-center space-x-2 border border-dashed border-gray-300 p-2">
          <PreviewTabsAsLinks />
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium">Tab - as Buttons</h3>
        <div className="border border-dashed border-gray-300 p-2">
          <PreviewTabsAsButtons />
        </div>
      </div>
    </div>
  );
}
