import { useState } from "react";
import Tabs from "./Tabs";

export default function PreviewTabsAsButtons() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="w-full space-y-2">
      <Tabs
        asLinks={false}
        onSelected={(selected) => {
          setSelectedTab(selected);
        }}
        className="w-full sm:w-auto"
        tabs={[{ name: "Tab 1" }, { name: "Tab 2" }, { name: "Tab 3" }]}
      />
      <div className="border border-gray-300 bg-gray-100 p-2">
        {selectedTab === 0 ? <div>Tab 1 Content...</div> : selectedTab === 1 ? <div>Tab 2 Content...</div> : <div>Tab 3 Content...</div>}
      </div>
    </div>
  );
}
