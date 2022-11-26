import { Fragment, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import OptionsIcon from "../icons/OptionsIcon";

interface Props {
  right?: boolean;
  options?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function DropdownOptions({ options, right, className }: Props) {
  return (
    <Menu as="div" className={clsx(className, "relative inline-block text-left")}>
      <div>
        <Menu.Button>
          <OptionsIcon />
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
