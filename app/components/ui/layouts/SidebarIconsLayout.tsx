import { Link, useLocation } from "@remix-run/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import UrlUtils from "~/utils/app/UrlUtils";
import Tabs from "../tabs/Tabs";

export type IconDto = {
  name: string;
  href: string;
  icon?: React.ReactNode;
  iconSelected?: React.ReactNode;
  bottom?: boolean;
  exact?: boolean;
};
export default function SidebarIconsLayout({
  children,
  items,
  label,
}: {
  children: React.ReactNode;
  items: IconDto[];
  label?: {
    align: "bottom" | "right";
  };
}) {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState<IconDto>();

  useEffect(() => {
    function findExactRoute(element: IconDto) {
      if (element.exact) {
        return UrlUtils.stripTrailingSlash(location.pathname) === UrlUtils.stripTrailingSlash(element.href);
      } else {
        return (location.pathname + location.search).includes(element.href);
      }
    }
    const current = items.find((element) => findExactRoute(element));
    setCurrentTab(current);
  }, [items, location.pathname, location.search]);

  return (
    <div className="sm:flex sm:h-[calc(100vh-56px)] sm:flex-row sm:bg-gray-50">
      <div className="hidden flex-none flex-col items-center justify-between border-r border-gray-200 bg-gray-100 shadow-sm sm:flex">
        <div className="flex w-full flex-col items-center ">
          {items
            .filter((f) => !f.bottom)
            .map((item, idx) => {
              return <IconLink key={idx} {...item} current={currentTab?.name === item.name} label={label} />;
            })}
        </div>
        <div className="flex w-full flex-col space-y-2 pb-5">
          {items
            .filter((f) => f.bottom)
            .map((item, idx) => {
              return <IconLink key={idx} {...item} current={currentTab?.name === item.name} label={label} />;
            })}
        </div>
      </div>

      <div className="w-full border-b border-gray-300 bg-white py-2 shadow-sm sm:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between space-x-2 px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
          <Tabs
            tabs={items.map((i) => {
              return { name: i.name, routePath: i.href };
            })}
            className="flex-grow"
          />
        </div>
      </div>

      <div className="w-full overflow-x-hidden">{children}</div>
    </div>
  );
}

function IconLink({
  name,
  href,
  icon,
  current,
  iconSelected,
  label,
}: {
  name: string;
  href: string;
  icon?: React.ReactNode;
  iconSelected?: React.ReactNode;
  current: boolean;
  label?: {
    align: "bottom" | "right";
  };
}) {
  return (
    <div className={clsx("w-full py-1 px-1")}>
      <Link
        to={href}
        className={clsx(
          "flex w-11 items-center justify-center rounded-md border py-2 px-2 text-xs hover:border-gray-300 hover:bg-gray-200 hover:text-gray-900",
          current ? " border-gray-300 bg-gray-200 text-gray-800" : "border-transparent text-gray-500",
          !label ? "w-11" : "lg:w-auto lg:justify-start",
          label?.align === "bottom" && "flex-col space-y-1",
          label?.align === "right" && "flex-row space-x-2"
        )}
      >
        <div>{current ? iconSelected : icon}</div>
        {label !== undefined && <div className="hidden lg:block">{name}</div>}
      </Link>
    </div>
  );
}
