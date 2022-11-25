import { ReactNode } from "react";
import BreadcrumbSimple from "../breadcrumbs/BreadcrumbSimple";

interface Props {
  title: string;
  menu?: {
    title: string;
    routePath?: string;
  }[];
  buttons?: ReactNode;
  children: ReactNode;
  className?: string;
}
export default function NewPageLayout({ title, menu, buttons, children, className = "pt-3 pb-6 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3" }: Props) {
  return (
    <div className={className}>
      <div className="space-y-1">
        <div className="flex items-center justify-between space-x-2">
          <h1 className="flex flex-1 items-center truncate text-xl font-medium">{title}</h1>
          <div className="flex items-center space-x-2">{buttons}</div>
        </div>

        {menu && <BreadcrumbSimple menu={menu} />}
      </div>

      {children}
    </div>
  );
}
