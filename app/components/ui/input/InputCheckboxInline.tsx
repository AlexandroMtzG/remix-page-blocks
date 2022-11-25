import clsx from "clsx";
import { forwardRef, ReactNode, Ref, RefObject, useImperativeHandle, useRef } from "react";
import HintTooltip from "~/components/ui/tooltips/HintTooltip";

export interface RefInputCheckbox {
  input: RefObject<HTMLInputElement>;
}

interface Props {
  name?: string;
  title?: string;
  value?: boolean;
  setValue?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  help?: string;
  required?: boolean;
  disabled?: boolean;
  description?: ReactNode;
  readOnly?: boolean;
}
const InputCheckboxInline = (
  { name, title, value, setValue, description, className, help, required, disabled = false, readOnly }: Props,
  ref: Ref<RefInputCheckbox>
) => {
  useImperativeHandle(ref, () => ({ input }));
  const input = useRef<HTMLInputElement>(null);
  return (
    <div className={className}>
      <div className="relative flex cursor-pointer select-none items-start sm:col-span-6">
        <div className="flex h-5 cursor-pointer items-center">
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={value}
            onChange={(e) => {
              setValue?.(e.target.checked);
            }}
            disabled={disabled}
            readOnly={readOnly}
            className={clsx(
              (disabled || readOnly) && "cursor-not-allowed bg-gray-100",
              "h-4 w-4 cursor-pointer rounded border-gray-300 text-theme-600 focus:ring-theme-500"
            )}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={name} className="cursor-pointer font-medium text-gray-700">
            <div className=" flex items-center space-x-1">
              <div>
                {title}
                {description}
                {required && <span className="ml-1 text-red-500">*</span>}
              </div>

              {help && <HintTooltip text={help} />}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
export default forwardRef(InputCheckboxInline);
