import clsx from "clsx";
import { forwardRef, ReactNode, Ref, RefObject, useImperativeHandle, useRef } from "react";

export interface RefInputNumber {
  input: RefObject<HTMLInputElement>;
}

interface Props {
  name?: string;
  title?: string;
  withLabel?: boolean;
  value?: number;
  setValue?: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
  help?: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  hint?: ReactNode;
  step?: string;
  placeholder?: string;
  icon?: string;
  borderless?: boolean;
}
const InputNumber = (
  {
    name,
    title,
    withLabel = true,
    value,
    setValue,
    className,
    hint,
    help,
    disabled = false,
    readOnly = false,
    required = false,
    min = 0,
    max,
    step,
    placeholder,
    icon,
    borderless,
  }: Props,
  ref: Ref<RefInputNumber>
) => {
  useImperativeHandle(ref, () => ({ input }));
  const input = useRef<HTMLInputElement>(null);
  return (
    <div className={className}>
      {withLabel && (
        <label htmlFor={name} className="flex justify-between space-x-2 text-xs font-medium text-gray-600">
          <div className=" flex items-center space-x-1">
            <div className="truncate">
              {title}
              {required && <span className="ml-1 text-red-500">*</span>}
            </div>
          </div>
          {hint}
        </label>
      )}
      <div className={clsx("relative flex w-full rounded-md", withLabel && "mt-1")}>
        <input
          ref={input}
          type="number"
          id={name}
          name={name}
          required={required}
          min={min}
          max={max}
          value={value ?? ""}
          step={step}
          placeholder={placeholder}
          onChange={(e) => (setValue ? setValue(Number(e.currentTarget.value)) : {})}
          disabled={disabled}
          readOnly={readOnly}
          className={clsx(
            "input-bordered input w-full",
            className,
            disabled || readOnly ? "cursor-not-allowed bg-gray-100" : "hover:bg-gray-50 focus:bg-gray-50",
            icon && "pl-10",
            borderless && "border-transparent"
          )}
        />
      </div>
    </div>
  );
};
export default forwardRef(InputNumber);
