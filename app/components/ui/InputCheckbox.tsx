import clsx from "clsx";
import { forwardRef, Fragment, ReactNode, Ref, RefObject, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Toggle } from "react-daisyui";

export interface RefInputCheckbox {
  input: RefObject<HTMLInputElement>;
}

interface Props {
  name?: string;
  title?: string;
  withLabel?: boolean;
  value?: boolean;
  setValue?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  asToggle?: boolean;
  readOnly?: boolean;
  hint?: ReactNode;
  help?: string;
  icon?: string;
}
const InputCheckbox = (
  { name, title, withLabel = true, value, setValue, className, required, disabled, asToggle, readOnly, hint, help, icon }: Props,
  ref: Ref<RefInputCheckbox>
) => {
  useImperativeHandle(ref, () => ({ input }));
  const input = useRef<HTMLInputElement>(null);

  const [toggle, setToggle] = useState(value ?? false);

  useEffect(() => {
    if (setValue && value !== toggle) {
      setValue(toggle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  return (
    <div className={className}>
      {withLabel && title && (
        <label htmlFor={name} className="flex justify-between space-x-2 text-xs font-medium text-gray-600 ">
          <div className=" flex items-center space-x-1">
            <div className="truncate">
              {title}
              {required && <span className="ml-1 text-red-500">*</span>}
            </div>
          </div>
          {hint}
        </label>
      )}
      <div className={clsx("relative flex w-full rounded-md", withLabel && title && "mt-1")}>
        {asToggle ? (
          <Fragment>
            <input type="hidden" readOnly name={name} value={value === true ? "true" : "false"} />

            <Toggle
              checked={toggle}
              onChange={(e) => setToggle(e.target.checked)}
              disabled={disabled || readOnly}
              className={clsx(
                toggle ? "bg-accent-600" : "bg-gray-200",
                "relative inline-flex h-5 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2",
                icon && "pl-10",
                disabled && "cursor-not-allowed"
              )}
            />
          </Fragment>
        ) : (
          <input
            type="checkbox"
            id={name}
            name={name}
            defaultChecked={value}
            readOnly={readOnly}
            onChange={(e) => (setValue ? setValue(e.target.checked) : {})}
            disabled={disabled}
            className={clsx((disabled || readOnly) && "cursor-not-allowed bg-gray-100", "checkbox-primary checkbox", className, icon && "pl-10")}
          />
        )}
      </div>
    </div>
  );
};
export default forwardRef(InputCheckbox);
