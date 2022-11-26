import { useLocation, useSearchParams, useSubmit } from "@remix-run/react";
import clsx from "clsx";
import { useRootData } from "~/utils/data/useRootData";

export default function DarkModeToggle({ className }: { className: string }) {
  const { userSession } = useRootData();
  let location = useLocation();
  const [searchParams] = useSearchParams();
  const submit = useSubmit();

  const toggle = async () => {
    const form = new FormData();
    form.set("action", "toggleLightOrDarkMode");
    form.set("redirect", location.pathname + "?" + searchParams.toString());
    submit(form, { method: "post", action: "/" });
  };
  const isDarkMode = userSession.lightOrDarkMode === "dark";

  return (
    <button type="button" onClick={toggle} className={clsx(className, "group flex w-full items-center justify-center space-x-2 focus:outline-none")}>
      <span className="text-base font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </span>
      <div className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-theme-500 focus:ring-offset-2">
        <div className="h-3.5 w-6 rounded-full bg-gray-500 shadow-md outline-none transition"></div>
        <div
          className={`absolute top-1 left-1 inline-flex h-1.5 w-1.5 transform items-center justify-center rounded-full bg-white shadow-sm transition-all duration-200 ease-in-out
                  ${isDarkMode ? "translate-x-3" : ""}`}
        ></div>
      </div>
      <span className="text-base font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </span>
    </button>
  );
}
