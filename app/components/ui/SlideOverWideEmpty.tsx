import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";

export default function SlideOverWideEmpty({
  title,
  open,
  children,
  onClose,
  className,
  buttons,
}: {
  title: string;
  open: boolean;
  children: ReactNode;
  onClose: () => void;
  className?: string;
  buttons?: ReactNode;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className={className} onClose={onClose}>
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
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className={clsx("pointer-events-auto w-screen max-w-2xl overflow-auto", className)}>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white pt-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">{title}</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center space-x-4">
                          {buttons}
                          {/* <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            onClick={onClose}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 border-t bg-gray-50 px-4 pb-6 pt-5 sm:px-6">
                      {/* Replace with your content */}
                      {/* <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
                      </div> */}
                      {children}
                      {/* /End replace */}
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
