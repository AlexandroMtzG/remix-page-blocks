import { Fragment, ReactNode, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import XIcon from "../icons/XIcon";
import clsx from "clsx";
import DotsVerticalFilledIcon from "../icons/DotsVerticalFilledIcon";
import { Link } from "@remix-run/react";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
  onClosed: () => void;
  className?: string;
  classNameBg?: string;
  options?: {
    title: string;
    onClick?: () => void;
    onClickRoute?: string;
  }[];
}

export default function SlideOverFormLayout({ title, description, children, onClosed, className = "max-w-lg", classNameBg = "bg-white", options }: Props) {
  const [open, setOpen] = useState(true);

  function onClose() {
    setOpen(false);
    onClosed();
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className={clsx("pointer-events-auto w-screen", className)}>
                  <div className={clsx("flex h-full flex-col overflow-y-scroll shadow-xl", classNameBg)}>
                    <div className="flex-1">
                      {/* Header */}
                      <div className="bg-gray-800 px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="space-y-1">
                            <Dialog.Title className="text-lg font-medium text-white"> {title} </Dialog.Title>
                            <p className="text-sm text-gray-500">{description}</p>
                          </div>
                          <div className="flex h-7 items-center space-x-2">
                            {options && options.length > 0 && (
                              <Menu as="div" className="relative ml-3 inline-block text-left">
                                <div>
                                  <Menu.Button className="-my-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Open options</span>
                                    <DotsVerticalFilledIcon className="h-5 w-5" aria-hidden="true" />
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
                                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      {options.map((item, idx) => {
                                        return (
                                          <Menu.Item key={idx}>
                                            {({ active }) => (
                                              <>
                                                {item.onClick && (
                                                  <button
                                                    type="button"
                                                    onClick={item.onClick}
                                                    className={clsx(
                                                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                      "flex w-full justify-between px-4 py-2 text-sm"
                                                    )}
                                                  >
                                                    <span>{item.title}</span>
                                                  </button>
                                                )}
                                                {item.onClickRoute && (
                                                  <Link
                                                    to={item.onClickRoute}
                                                    className={clsx(
                                                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                      "flex justify-between px-4 py-2 text-sm"
                                                    )}
                                                  >
                                                    <span>Previous conversations</span>
                                                  </Link>
                                                )}
                                              </>
                                            )}
                                          </Menu.Item>
                                        );
                                      })}
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            )}
                            <button type="button" className="text-gray-400 hover:text-gray-500" onClick={onClose}>
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">{children}</div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
