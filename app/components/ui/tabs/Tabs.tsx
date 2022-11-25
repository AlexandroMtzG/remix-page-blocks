import { Link, useLocation, useNavigate } from "@remix-run/react";

import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import UrlUtils from "~/utils/app/UrlUtils";

export interface TabItem {
  name: any;
  routePath?: string;
}

interface Props {
  className?: string;
  tabs: TabItem[];
  asLinks?: boolean;
  onSelected?: (idx: number) => void;
  breakpoint?: "sm" | "md" | "lg" | "xl" | "2xl";
  exact?: boolean;
}

export default function Tabs({ className = "", breakpoint = "md", tabs = [], asLinks = true, onSelected, exact }: Props) {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const [selected, setSelected] = useState(0);

  function selectTab(idx: number) {
    const tab = tabs[idx];
    setSelected(idx);
    if (asLinks) {
      if (tab?.routePath) {
        navigate(tab.routePath);
      }
    } else {
      if (onSelected) {
        onSelected(idx);
      }
    }
  }
  function isCurrent(idx: number) {
    return currentTab() === tabs[idx];
  }
  const currentTab = () => {
    if (asLinks) {
      if (exact) {
        return tabs.find((element) => element.routePath && UrlUtils.stripTrailingSlash(location.pathname) === UrlUtils.stripTrailingSlash(element.routePath));
      } else {
        return tabs.find((element) => element.routePath && (location.pathname + location.search).includes(element.routePath));
      }
    } else {
      return tabs[selected];
    }
  };
  return (
    <div className={className}>
      <div
        className={clsx(
          breakpoint === "sm" && "sm:hidden",
          breakpoint === "md" && "md:hidden",
          breakpoint === "lg" && "lg:hidden",
          breakpoint === "xl" && "xl:hidden",
          breakpoint === "2xl" && "2xl:hidden"
        )}
      >
        <label htmlFor="tabs" className="sr-only">
          {t("app.shared.tabs.select")}
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500"
          onChange={(e) => selectTab(Number(e.target.value))}
          value={selected}
        >
          {tabs.map((tab, idx) => {
            return (
              <option key={tab.name} value={Number(idx)}>
                {tab.name}
              </option>
            );
          })}
        </select>
      </div>
      <div
        className={clsx(
          breakpoint === "sm" && "hidden sm:block",
          breakpoint === "md" && "hidden md:block",
          breakpoint === "lg" && "hidden lg:block",
          breakpoint === "xl" && "hidden xl:block",
          breakpoint === "2xl" && "hidden 2xl:block"
        )}
      >
        {(() => {
          if (asLinks) {
            return (
              <nav className="flex space-x-4" aria-label="Tabs">
                {tabs
                  .filter((f) => f.routePath)
                  .map((tab, idx) => {
                    return (
                      <Link
                        key={tab.name}
                        to={tab.routePath ?? ""}
                        className={clsx(
                          "truncate border",
                          isCurrent(idx) ? "border-accent-300 bg-accent-100 text-accent-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700",
                          "rounded-sm border-transparent px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={isCurrent(idx) ? "page" : undefined}
                      >
                        {tab.name}
                      </Link>
                    );
                  })}
              </nav>
            );
          } else {
            return (
              <nav className="flex space-x-4" aria-label="Tabs">
                {tabs.map((tab, idx) => {
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => selectTab(idx)}
                      className={clsx(
                        "truncate",
                        isCurrent(idx) ? "border border-accent-300 bg-accent-100 text-accent-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700",
                        "rounded-sm border-transparent px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {tab.name}
                    </button>
                  );
                })}
              </nav>
            );
          }
        })()}
      </div>
    </div>
  );
}
