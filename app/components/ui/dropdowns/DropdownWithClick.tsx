import { Fragment, MouseEventHandler, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Link } from "@remix-run/react";

interface Props {
  right?: boolean;
  button?: ReactNode;
  to?: string;
  options?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function DropdownWithClick({ button, to, options, right, onClick, className, disabled }: Props) {
  return (
    <span className={clsx(className, "relative z-10 inline-flex rounded-md shadow-sm")}>
      {to ? (
        <Link
          to={to}
          className={clsx(
            "relative -mr-1 inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:z-10 focus:border-theme-500 focus:outline-none focus:ring-1 focus:ring-theme-500",
            disabled ? "cursor-not-allowed opacity-80" : "hover:bg-gray-50 focus:bg-gray-50"
          )}
        >
          {button}
        </Link>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          type="button"
          className={clsx(
            "relative -mr-1 inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:z-10 focus:border-theme-500 focus:outline-none focus:ring-1 focus:ring-theme-500",
            disabled ? "cursor-not-allowed opacity-80" : "hover:bg-gray-50 focus:bg-gray-50"
          )}
        >
          {button}
        </button>
      )}
      <Menu as="span" className="relative -ml-px block">
        <Menu.Button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-theme-500 focus:outline-none focus:ring-1 focus:ring-theme-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={clsx(
              "absolute z-40 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
              right ? "left-0 origin-top-left" : "right-0 origin-top-right"
            )}
          >
            <div className="py-1">{options}</div>
          </Menu.Items>
        </Transition>
      </Menu>
    </span>
  );
}
