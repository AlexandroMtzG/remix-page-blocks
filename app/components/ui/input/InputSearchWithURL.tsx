import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "@remix-run/react";
import ButtonPrimary from "../buttons/ButtonPrimary";

interface Props {
  onNew?: () => void;
  onNewRoute?: string;
  placeholder?: string;
}

export default function InputSearchWithURL({ onNew, onNewRoute, placeholder }: Props) {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  useEffect(() => {
    const query = searchParams.get("q")?.toString();
    if (query) {
      setValue(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // searchParams.set("page", "1");
    if (value.length > 0) {
      searchParams.set("q", value);
    } else {
      searchParams.delete("q");
    }
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="flex justify-between space-x-2">
      <div className="relative flex w-full flex-auto items-center">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 focus-within:z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-gray-300 pl-9 text-sm focus:border-theme-500 focus:ring-theme-500"
          placeholder={placeholder ?? t("shared.searchDot")}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
        />
      </div>

      {onNew && <ButtonPrimary onClick={onNew}>{t("shared.new")}</ButtonPrimary>}
      {onNewRoute && <ButtonPrimary to={onNewRoute}>{t("shared.new")}</ButtonPrimary>}
    </div>
  );
}
