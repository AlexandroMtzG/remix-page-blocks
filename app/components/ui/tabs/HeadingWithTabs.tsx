import { useLocation } from "@remix-run/react";
import clsx from "clsx";
import UrlUtils from "~/utils/app/UrlUtils";

export default function HeadingWithTabs({ tabs }: { tabs: { name: string; href: string }[] }) {
  const location = useLocation();
  function isCurrent(idx: number) {
    return currentTab() === tabs[idx];
  }
  const currentTab = () => {
    return tabs.find((element) => element.href && UrlUtils.stripTrailingSlash(location.pathname) === UrlUtils.stripTrailingSlash(element.href));
  };
  return (
    <div className="w-full sm:flex sm:items-baseline">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Issues</h3>
      <div className="mt-4 sm:mt-0 sm:ml-10">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab, idx) => (
            <a
              key={tab.name}
              href={tab.href}
              className={clsx(
                isCurrent(idx) ? "border-theme-500 text-theme-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
              )}
              aria-current={isCurrent(idx) ? "page" : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
