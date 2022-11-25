import { Link, useLocation } from "@remix-run/react";
import { Menu } from "@headlessui/react";
import clsx from "clsx";
import DropdownWithClick from "./DropdownWithClick";

export default function PreviewDropdownsWithClick() {
  const currentRoute = useLocation().pathname;
  return (
    <div className="not-prose space-x-2 border border-dashed border-gray-300 bg-white p-6">
      <div className="w-full space-y-2">
        <div className="flex justify-between">
          <DropdownWithClick
            right={true}
            onClick={() => alert("Dropdown click")}
            button={<div>Dropdown with Click</div>}
            options={
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      onClick={() => alert("Clicked")}
                      className={clsx("w-full text-left", active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}
                    >
                      Button
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to={currentRoute} className={clsx("w-full", active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                      <div>Link</div>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            }
          />
          <DropdownWithClick
            onClick={() => alert("Dropdown click")}
            button={<div>Dropdown with Click</div>}
            options={
              <div>
                <button
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 focus:outline-none"
                  tabIndex={-1}
                  onClick={() => alert("Clicked")}
                >
                  <div>Button</div>
                </button>
                <Link to={currentRoute} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 focus:outline-none" tabIndex={-1}>
                  <div>Link</div>
                </Link>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
