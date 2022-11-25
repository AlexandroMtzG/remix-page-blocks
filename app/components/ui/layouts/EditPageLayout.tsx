import { ReactNode } from "react";
import { useParams } from "@remix-run/react";
import BreadcrumbSimple from "../breadcrumbs/BreadcrumbSimple";

interface Props {
  title: string;
  menu?: {
    title: string;
    routePath?: string;
  }[];
  buttons?: ReactNode;
  children: ReactNode;
  withHome?: boolean;
}
export default function EditPageLayout({ title, menu, buttons, children, withHome = true }: Props) {
  const params = useParams();
  const home = params.tenant ? `/app/${params.tenant}/dashboard` : "/admin/dashboard";
  return (
    <div className="mx-auto max-w-5xl space-y-3 px-4 pt-3 pb-6 sm:px-6 lg:px-8 xl:max-w-6xl">
      <div className="space-y-1">
        <div className="flex items-center justify-between space-x-2">
          <h1 className="flex flex-1 items-center truncate text-xl font-medium">{title}</h1>
          <div className="flex items-center space-x-2">{buttons}</div>
        </div>

        {menu && <BreadcrumbSimple home={withHome ? home : undefined} menu={menu} />}
      </div>

      {children}
    </div>
  );
}
