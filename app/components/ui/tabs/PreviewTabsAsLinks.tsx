import Tabs from "./Tabs";

export default function PreviewTabsAsLinks() {
  return (
    <div className="not-prose w-full space-y-2">
      <Tabs
        asLinks={true}
        className="w-full sm:w-auto"
        tabs={[
          { name: "Home", routePath: "/docs/components" },
          {
            name: "Components",
            routePath: "/docs/components/tabs",
          },
        ]}
      />
    </div>
  );
}
