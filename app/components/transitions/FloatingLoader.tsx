import { Fragment, useEffect, useState } from "react";
import { useTransition } from "@remix-run/react";
import { useSpinDelay } from "spin-delay";
import { Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";

let firstRender = false;

interface Props {
  loading?: boolean;
}
export default function FloatingLoader({ loading }: Props) {
  const { t } = useTranslation();
  const transition = useTransition();
  const [, setWords] = useState<Array<string>>([]);
  const [pendingPath, setPendingPath] = useState("");
  const showLoader = useSpinDelay(Boolean(transition.state !== "idle" || loading), {
    delay: 400,
    minDuration: 1000,
  });

  useEffect(() => {
    if (transition.location?.pathname === "/") return;
    if (transition.state === "idle") return;
    if (transition.state === "loading") setWords(LOADER_WORDS);
    if (transition.state === "submitting") setWords(ACTION_WORDS);

    const interval = setInterval(() => {
      setWords(([first, ...rest]) => [...rest, first] as Array<string>);
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingPath, transition.state]);

  useEffect(() => {
    if (firstRender) return;
    if (transition.state === "idle") return;
    setPendingPath(transition.location.pathname);
  }, [transition]);

  useEffect(() => {
    firstRender = false;
  }, []);

  const action = transition.state === "loading" ? t("shared.loading") : t("shared.processing");

  return (
    <div aria-live="assertive" className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:p-6">
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
        <Transition
          show={showLoader}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto w-64 max-w-sm overflow-hidden rounded-lg bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="space-y-2 pt-2 pb-2 text-center">
              <div className="flex h-auto w-full items-center space-x-4 px-3 text-center">
                <div className=" loader h-10 w-10 flex-shrink-0 rounded-full border-4 border-t-4 border-slate-200 text-left ease-linear"></div>
                <div className="flex flex-col truncate text-gray-600">
                  <div className="text-left">{action}...</div>
                  {transition.location?.pathname && (
                    <div className="truncate text-left text-xs lowercase text-gray-500">
                      {t("shared.path")}: {transition.location?.pathname}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

const LOADER_WORDS = ["loading", "checking cdn", "checking cache", "fetching from db", "compiling mdx", "updating cache", "transfer"];
const ACTION_WORDS = ["packaging", "zapping", "validating", "processing", "calculating", "computing", "computering"];
