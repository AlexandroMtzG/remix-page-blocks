import { useLocation } from "@remix-run/react";
import EmptyState from "./EmptyState";

export default function PreviewEmptyStates() {
  const currentRoute = useLocation().pathname;
  return (
    <div id="empty-states" className="space-y-1">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <div className="w-full space-y-2">
          <EmptyState
            onClick={() => alert("Clicked")}
            captions={{
              new: "Button",
              thereAreNo: "There are no...",
              description: "Description...",
            }}
            icon="plus"
          />
          <EmptyState
            to={currentRoute}
            captions={{
              new: "Link",
              thereAreNo: "There are no...",
              description: "Description...",
            }}
          />
        </div>
      </div>
    </div>
  );
}
