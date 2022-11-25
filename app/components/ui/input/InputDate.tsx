import clsx from "clsx";
import { forwardRef, ReactNode, Ref, RefObject, useEffect, useImperativeHandle, useRef, useState } from "react";
import HintTooltip from "~/components/ui/tooltips/HintTooltip";

export interface RefInputDate {
  input: RefObject<HTMLInputElement>;
}

interface Props {
  name: string;
  title: string;
  defaultValue?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
  help?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  hint?: ReactNode;
  icon?: string;
  darkMode?: boolean;
}
const InputDate = (
  { name, title, value, defaultValue, onChange, className, help, disabled = false, readOnly = false, required = false, hint, icon, darkMode }: Props,
  ref: Ref<RefInputDate>
) => {
  useImperativeHandle(ref, () => ({ input }));
  const input = useRef<HTMLInputElement>(null);

  const [dateDefaultValue, setDateDefaultValue] = useState<string>();
  const [dateValue, setDateValue] = useState<string>();

  useEffect(() => {
    if (defaultValue) {
      const date = new Date(defaultValue);
      if (date) {
        setDateDefaultValue(date.toISOString().split("T")[0]);
      }
    }
  }, [defaultValue]);

  useEffect(() => {
    if (value) {
      const date = new Date(value);
      if (date) {
        setDateValue(date.toISOString().split("T")[0]);
      }
    }
  }, [value]);

  return (
    <div className={clsx(className, !darkMode && "text-gray-800")}>
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
      <div className="relative mt-1 flex w-full rounded-md shadow-sm">
        <input
          ref={input}
          type="date"
          id={name}
          name={name}
          required={required}
          defaultValue={dateDefaultValue ?? undefined}
          value={dateValue ?? undefined}
          onChange={(e) => (onChange ? onChange(e.target.valueAsDate || new Date()) : {})}
          disabled={disabled}
          readOnly={readOnly}
          className={clsx(
            "block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500 sm:text-sm",
            className,
            (disabled || readOnly) && "cursor-not-allowed bg-gray-100",
            icon && "pl-10"
          )}
        />
      </div>
    </div>
  );
};
export default forwardRef(InputDate);
