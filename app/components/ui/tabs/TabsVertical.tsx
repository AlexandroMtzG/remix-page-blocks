import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "@remix-run/react";
import UrlUtils from "~/utils/app/UrlUtils";
import clsx from "clsx";

export interface TabItem {
  name: any;
  routePath?: string;
}

interface Props {
  className?: string;
  tabs: TabItem[];
  asLinks?: boolean;
  onSelected?: (idx: number) => void;
  exact?: boolean;
}

export default function TabsVertical({ className = "", tabs = [], asLinks = true, onSelected, exact }: Props) {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    tabs.forEach((tab, index) => {
      if (tab.routePath && (location.pathname + location.search).includes(tab.routePath)) {
        setSelected(index);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs, location.pathname]);

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
    <nav className={clsx("w-full space-y-1", className)} aria-label="Sidebar">
      <div className="lg:hidden">
        <label htmlFor="tabs" className="sr-only">
          {t("app.shared.tabs.select")}
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-theme-500 focus:ring-theme-500"
          onChange={(e) => selectTab(Number(e.target.value))}
          value={selected}
        >
          {tabs.map((item, idx) => {
            return (
              <option key={item.name} value={Number(idx)}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="hidden lg:block">
        {tabs.map((item, idx) => (
          <Link
            key={item.name}
            to={item.routePath ?? ""}
            className={clsx(
              "border",
              isCurrent(idx) ? "border-gray-200 bg-gray-100 text-gray-900 shadow-sm" : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              "flex items-center rounded-md px-3 py-2 text-sm font-medium"
            )}
          >
            <span className="truncate">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
