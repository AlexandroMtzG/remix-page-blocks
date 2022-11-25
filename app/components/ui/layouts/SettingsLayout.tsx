import { Link, useLocation } from "@remix-run/react";
import clsx from "clsx";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Tabs from "../tabs/Tabs";

export default function SettingsLayout({
  items,
  children,
}: {
  items: { name: string; description: string; routePath: string; icon: ReactNode }[];
  children: ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex flex-1 flex-col overflow-y-auto lg:overflow-hidden">
        {/* Breadcrumb */}
        <div className="p-3 lg:hidden">
          <Tabs tabs={items} breakpoint="lg" asLinks={true} />
        </div>

        <div className="flex flex-1 lg:overflow-hidden">
          {/* Secondary sidebar */}
          <nav aria-label="Sections" className="hidden w-72 flex-shrink-0 border-r border-gray-200 bg-white lg:flex lg:flex-col">
            <div className="flex h-16 flex-shrink-0 items-center border-b border-gray-200 px-6">
              <p className="text-lg font-medium text-gray-900">{t("settings.title")}</p>
            </div>
            <div className="min-h-screen flex-1 overflow-y-auto">
              <SubNavigation items={items} />
            </div>
          </nav>

          {children}
        </div>
      </div>
    </div>
  );
}

function SubNavigation({
  items,
}: {
  items: {
    name: string;
    description: string;
    routePath: string;
    icon: ReactNode;
  }[];
}) {
  const location = useLocation();
  function isCurrent(idx: number) {
    return currentTab() === items[idx];
  }
  const currentTab = () => {
    return items.find((element) => element.routePath && (location.pathname + location.search).includes(element.routePath));
  };

  return (
    <>
      {items.map((item, idx) => (
        <Link
          key={item.name}
          to={item.routePath}
          className={clsx(isCurrent(idx) ? "bg-gray-50 bg-opacity-50" : "hover:bg-gray-50 hover:bg-opacity-50", "flex border-b border-gray-200 px-6 py-3")}
          aria-current={isCurrent(idx) ? "page" : undefined}
        >
          {item.icon}
          <div className="ml-3 text-sm">
            <p className="font-medium text-gray-900">{item.name}</p>
            <p className="mt-1 text-xs text-gray-500">{item.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
