import { Fragment, MouseEventHandler, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";

interface Props {
  right?: boolean;
  button?: ReactNode;
  options?: ReactNode;
  children?: ReactNode;
  className?: string;
  btnClassName?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Dropdown({ button, options, right, onClick, className, btnClassName }: Props) {
  return (
    <Menu as="div" className={clsx(className, "relative inline-block text-left")}>
      <div>
        <Menu.Button
          onClick={onClick}
          className={
            btnClassName ??
            "inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-theme-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          }
        >
          {button}
          {!btnClassName && (
            <svg xmlns="http://www.w3.org/2000/svg" className="-mr-1 ml-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </Menu.Button>
      </div>

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
  );
}
