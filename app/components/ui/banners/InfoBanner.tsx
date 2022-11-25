import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@remix-run/react";

interface Props {
  title: ReactNode;
  text: ReactNode;
  redirect?: string;
  children?: ReactNode;
}

export default function InfoBanner({ title = "Note", text = "", redirect, children }: Props) {
  const { t } = useTranslation();
  return (
    <div className="not-prose rounded-md border border-theme-300 bg-theme-50">
      <div className="rounded-md p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-theme-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="ml-3 w-full">
            <h3 className="text-sm font-medium leading-5 text-theme-900">{title}</h3>
            <div className="mt-2 text-sm leading-5 text-theme-800">
              <div>
                {text}{" "}
                {redirect && (
                  <Link className="mt-2 text-theme-900 underline" to={redirect}>
                    {t("shared.goTo")} {redirect}
                  </Link>
                )}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
