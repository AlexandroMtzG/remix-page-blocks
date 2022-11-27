import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useRootData } from "~/utils/data/useRootData";

export default function ServerError({ error }: { error: Error }) {
  const { t } = useTranslation();
  const { debug } = useRootData();
  return (
    <div className="px-4 py-4">
      <div className="mx-auto w-full space-y-2 rounded-md border-2 border-dashed border-gray-300 bg-white p-12 text-center shadow-md">
        <div className="flex flex-col justify-center space-y-1">
          <div className="mx-auto text-red-500">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <div className="text-2xl font-bold">{t("shared.error")}</div>
        </div>
        <div className="text-gray-800">{error.message}</div>
        <Link to="." className="text-sm text-gray-500 underline">
          Click here to try again
        </Link>
        {debug && error.stack && (
          <div className="pt-4">
            <div className="break-words border-t border-dashed border-gray-300 pt-3 text-left text-sm text-gray-600">{error.stack}</div>
          </div>
        )}
      </div>
    </div>
  );
}
