import clsx from "clsx";
import { Link, useParams } from "@remix-run/react";
import UrlUtils from "~/utils/app/UrlUtils";
import RightIcon from "../icons/RightIcon";

interface MenuItem {
  title: string;
  routePath?: string;
}

interface Props {
  menu: MenuItem[];
  className?: string;
  home?: string;
}

export default function BreadcrumbSimple({ menu = [], className = "", home = "" }: Props) {
  const params = useParams();
  return (
    <nav className={clsx("not-prose flex", className)} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {home && (
          <li>
            <div>
              <Link to={home.length > 0 ? home : UrlUtils.currentTenantUrl(params, "dashboard")} className="text-gray-300 hover:text-gray-400">
                <svg className="h-4 w-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
        )}
        {menu.map((item, idx) => (
          <li key={item.title}>
            <div className="flex items-center">
              {(idx > 0 || home) && <RightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />}
              {item.routePath ? (
                <Link to={item.routePath} className={clsx("select-none text-sm font-normal text-gray-400 hover:text-gray-600", home && "ml-1")}>
                  {item.title}
                </Link>
              ) : (
                <span className="ml-1 select-none text-sm font-normal text-gray-400">{item.title}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
