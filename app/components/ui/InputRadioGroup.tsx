import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  name?: string;
  title?: string;
  options: { name: string | ReactNode; value: string | number | undefined; disabled?: boolean }[];
  value?: string | number | undefined;
  setValue?: React.Dispatch<React.SetStateAction<string | number | undefined>>;
  className?: string;
  required?: boolean;
  disabled?: boolean;
}
export default function InputRadioGroup({ name, title, value, options, setValue, className, required, disabled }: Props) {
  return (
    <div className={clsx(className, "w-full flex-grow")}>
      <div className="flex items-center justify-between">
        <label className="flex justify-between space-x-2 truncate text-xs font-medium text-gray-600">
          {title}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      </div>

      <input type="hidden" name={name} value={value} />

      <RadioGroup disabled={disabled} defaultValue={value} value={value} onChange={(e) => (setValue ? setValue(e) : {})} className="mt-1">
        <RadioGroup.Label className="sr-only">{title}</RadioGroup.Label>
        <div className={clsx("flex space-x-2")}>
          {options.map((option, idx) => (
            <RadioGroup.Option
              key={idx}
              value={option.value}
              className={({ active, checked }) =>
                clsx(
                  !option.disabled && !disabled ? "cursor-pointer focus:outline-none " : "cursor-not-allowed opacity-25",
                  active ? "ring-2 ring-accent-500 focus:ring-accent-300" : "",
                  checked
                    ? "border-transparent bg-theme-800 text-white hover:bg-theme-900 hover:text-accent-100"
                    : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                  "flex items-center justify-center rounded-md border py-2 px-3 text-sm font-medium uppercase sm:flex-1"
                )
              }
              disabled={option.disabled}
            >
              <RadioGroup.Label as="p">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
