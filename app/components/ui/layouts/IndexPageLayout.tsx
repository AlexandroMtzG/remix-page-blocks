import { ReactNode } from "react";
import Tabs, { TabItem } from "../tabs/Tabs";

interface Props {
  title?: ReactNode;
  buttons?: ReactNode;
  children: ReactNode;
  tabs?: TabItem[];
  replaceTitleWithTabs?: boolean;
}
export default function IndexPageLayout({ title, buttons, children, tabs, replaceTitleWithTabs }: Props) {
  return (
    <>
      {(title || buttons || (replaceTitleWithTabs && tabs)) && (
        <div className="w-full border-b border-gray-300 bg-white py-2 shadow-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between space-x-2 px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
            {replaceTitleWithTabs && tabs ? (
              <Tabs tabs={tabs} className="flex-grow" />
            ) : (
              <div className="flex flex-1 items-center truncate font-bold">{title}</div>
            )}
            {buttons && <div className="flex items-center space-x-2">{buttons}</div>}
          </div>
        </div>
      )}
      {tabs && !replaceTitleWithTabs && (
        <div className="w-full py-2">
          <div className="mx-auto flex max-w-5xl items-center justify-between space-x-2 px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
            <Tabs tabs={tabs} className="flex-grow" />
          </div>
        </div>
      )}
      <div className="mx-auto max-w-5xl space-y-2 px-4 pt-2 pb-6 sm:px-6 lg:px-8 xl:max-w-7xl">{children}</div>
    </>
  );
}
