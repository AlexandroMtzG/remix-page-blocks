import { forwardRef, Fragment, Ref, useEffect, useImperativeHandle, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export interface RefSuccessModal {
  show: (title?: string, description?: string) => void;
}

interface Props {
  className?: string;
  onClosed?: () => void;
}

const SuccessModal = ({ className, onClosed }: Props, ref: Ref<RefSuccessModal>) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const [closeText, setCloseText] = useState<string>();

  useEffect(() => {
    setTitle(t("shared.success").toString());
    setCloseText(t("shared.close"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function close() {
    setOpen(false);
    if (onClosed) {
      onClosed();
    }
  }

  useImperativeHandle(ref, () => ({ show }));

  function show(_title?: string, _description?: string) {
    if (_title) {
      setTitle(_title);
    }
    if (_description) {
      setDescription(_description);
    }
    setOpen(true);
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className={clsx(className, "fixed inset-0 z-10 overflow-y-auto")} onClose={setOpen}>
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:max-w-sm sm:p-6 sm:align-middle">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:text-sm"
                  onClick={close}
                >
                  {closeText}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default forwardRef(SuccessModal);
