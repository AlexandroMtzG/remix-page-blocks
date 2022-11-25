import { ReactNode } from "react";
import clsx from "clsx";
import HintTooltip from "../tooltips/HintTooltip";

interface Props {
  name: string;
  title?: string;
  withLabel?: boolean;
  options: { name: string; value: string | number | undefined; disabled?: boolean }[];
  value?: string | number | undefined;
  setValue?: React.Dispatch<React.SetStateAction<string | number | undefined>>;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  help?: string;
  hint?: ReactNode;
  borderless?: boolean;
}
export default function InputSelect({ name, title, withLabel = true, value, options, setValue, className, required, disabled, help, hint, borderless }: Props) {
  return (
    <div className={clsx(className, "w-full flex-grow text-gray-800")}>
      {withLabel && title && (
        <label htmlFor={name} className="flex justify-between space-x-2 text-xs font-medium text-gray-600">
          <div className=" flex items-center space-x-1">
            <div className="truncate">
              {title}
              {required && <span className="ml-1 text-red-500">*</span>}
            </div>

            {help && <HintTooltip text={help} />}
          </div>
          {hint}
        </label>
      )}
      <div className={clsx(withLabel && title && "mt-1")}>
        <select
          id={name}
          name={name}
          value={value}
          onChange={(e) => (setValue ? setValue(e.currentTarget.value) : {})}
          className={clsx(
            "block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500 sm:text-sm",
            className,
            disabled ? "cursor-not-allowed bg-gray-100" : "hover:bg-gray-50 focus:bg-gray-50",
            borderless && "border-transparent"
          )}
          disabled={disabled}
        >
          {options.map((item, idx) => {
            return (
              <option key={idx} value={item.value} disabled={item.disabled}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
