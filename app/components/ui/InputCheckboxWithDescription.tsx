import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  name?: string;
  title?: string | ReactNode;
  description: string | ReactNode;
  value?: boolean;
  setValue?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  help?: string;
  disabled?: boolean;
}
export default function InputCheckboxWithDescription({ name, title, value, setValue, description, className, help, disabled = false }: Props) {
  return (
    <div className={clsx("relative flex items-start pt-2 pb-4", className)}>
      <div className="min-w-0 flex-1 text-sm">
        <label htmlFor={name} className="cursor-pointer select-none">
          <div className="font-medium text-gray-700">{title}</div>

          <div id={name + "-description"} className="text-gray-400">
            {description}
          </div>
        </label>
      </div>
      <div className="ml-3 flex h-5 items-center">
        <input
          id={name}
          aria-describedby={name + "-description"}
          name={name}
          type="checkbox"
          checked={value}
          onChange={(e) => {
            setValue?.(e.target.checked);
          }}
          disabled={disabled}
          className={clsx(disabled && "cursor-not-allowed bg-gray-100", "checkbox-primary checkbox")}
        />
      </div>
    </div>
  );
}
