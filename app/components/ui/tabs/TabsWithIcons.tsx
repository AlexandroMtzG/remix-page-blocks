import { Link, useNavigate } from "@remix-run/react";
import clsx from "clsx";
import { Fragment, ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  tabs: {
    name?: string;
    href?: string;
    current: boolean;
    icon?: ReactNode;
    onClick?: () => void;
  }[];
  className?: string;
}
export default function TabsWithIcons({ tabs, className }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={className}>
      <div className={clsx(tabs.length <= 5 && "sm:hidden")}>
        <label htmlFor="tabs" className="sr-only">
          {t("shared.select")}
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500"
          value={tabs.find((tab) => tab.current)?.name}
          onChange={(e) => {
            const tab = tabs.find((tab) => tab.name === e.target.value);
            if (tab?.href) {
              navigate(tab.href);
            } else if (tab?.onClick) {
              tab.onClick();
            }
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className={clsx(tabs.length <= 5 ? "hidden sm:block" : "hidden")}>
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-4" aria-label="Tabs">
            {tabs.map((tab, idx) => (
              <Fragment key={idx}>
                {tab.href && (
                  <Link
                    key={tab.name}
                    to={tab.href}
                    className={clsx(
                      tab.current ? "border-accent-500 text-accent-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "group inline-flex items-center space-x-2 border-b-2 py-2 px-1 text-sm font-medium"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                  >
                    {tab.icon}
                    <div className="truncate">{tab.name}</div>
                  </Link>
                )}
                {tab.onClick && (
                  <button
                    type="button"
                    onClick={tab.onClick}
                    className={clsx(
                      tab.current ? "border-accent-500 text-accent-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "group inline-flex w-full items-center space-x-2 border-b-2 py-2 px-1 text-sm font-medium"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                  >
                    {tab.icon}
                    <div className="truncate">{tab.name}</div>
                  </button>
                )}
              </Fragment>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
