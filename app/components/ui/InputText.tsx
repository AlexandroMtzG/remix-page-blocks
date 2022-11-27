import clsx from "clsx";
import { forwardRef, ReactNode, Ref, RefObject, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Editor from "@monaco-editor/react";

export interface RefInputText {
  input: RefObject<HTMLInputElement> | RefObject<HTMLTextAreaElement>;
}

interface Props {
  name?: string;
  title?: string;
  withLabel?: boolean;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  classNameBg?: string;
  minLength?: number;
  maxLength?: number;
  readOnly?: boolean;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  withTranslation?: boolean;
  translationParams?: string[];
  placeholder?: string;
  pattern?: string;
  rows?: number;
  button?: ReactNode;
  lowercase?: boolean;
  uppercase?: boolean;
  type?: string;
  darkMode?: boolean;
  hint?: ReactNode;
  help?: string;
  icon?: string;
  editor?: string; // monaco
  editorLanguage?: string; // "javascript" | "typescript" | "html" | "css" | "json";
  editorHideLineNumbers?: boolean;
  editorTheme?: "vs-dark" | "light";
  onBlur?: () => void;
  borderless?: boolean;
  editorSize?: "sm" | "md" | "lg";
}
const InputText = (
  {
    name,
    title,
    withLabel = true,
    value,
    setValue,
    className,
    classNameBg,
    help,
    disabled = false,
    readOnly = false,
    required = false,
    minLength,
    maxLength,
    autoComplete,
    withTranslation = false,
    translationParams = [],
    placeholder,
    pattern,
    hint,
    rows,
    button,
    lowercase,
    uppercase,
    type = "text",
    darkMode,
    icon,
    editor,
    editorLanguage,
    editorHideLineNumbers,
    editorTheme = "vs-dark",
    onBlur,
    borderless,
    editorSize = "sm",
  }: Props,
  ref: Ref<RefInputText>
) => {
  const { t, i18n } = useTranslation();

  const [actualValue, setActualValue] = useState<string>(value ?? "");

  useEffect(() => {
    setActualValue(value ?? "");
  }, [value]);

  useEffect(() => {
    if (onChange) {
      onChange(actualValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualValue]);

  useImperativeHandle(ref, () => ({ input }));
  const input = useRef<HTMLInputElement>(null);
  const textArea = useRef<HTMLTextAreaElement>(null);

  function getTranslation(value: string) {
    if (!i18n.exists(value)) {
      return null;
    }
    return t(value);
  }

  function onChange(value: string) {
    if (setValue) {
      if (lowercase) {
        setValue(value.toLowerCase());
      } else if (uppercase) {
        setValue(value.toUpperCase());
      } else {
        setValue(value);
      }
    }
  }

  return (
    <div className={clsx(className, !darkMode && "text-gray-800")}>
      {withLabel && (
        <label htmlFor={name} className="flex justify-between space-x-2 text-xs font-medium text-gray-600 ">
          <div className=" flex items-center space-x-1">
            <div className="truncate">
              {title}
              {required && <span className="ml-1 text-red-500">*</span>}
            </div>
          </div>
          {withTranslation && value?.includes(".") && (
            <div className="truncate font-light italic text-slate-600" title={t(value, translationParams ?? [])}>
              {t("admin.pricing.i18n")}:{" "}
              {getTranslation(value) ? (
                <span className="text-slate-600">{t(value, translationParams ?? [])}</span>
              ) : (
                <span className="text-red-600">{t("shared.invalid")}</span>
              )}
            </div>
          )}
          {hint}
        </label>
      )}
      <div className={clsx("relative flex w-full rounded-md", withLabel && "mt-1")}>
        {editor === "monaco" && editorLanguage ? (
          <>
            <textarea hidden readOnly name={name} value={actualValue} />
            <Editor
              theme={editorTheme}
              className={clsx(
                "block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500 sm:text-sm",
                editorSize === "sm" && "h-32",
                editorSize === "md" && "h-64",
                editorSize === "lg" && "h-96",
                className,
                classNameBg,
                editorHideLineNumbers && "-ml-10",
                borderless && "border-transparent"
              )}
              defaultLanguage={editorLanguage}
              language={editorLanguage}
              defaultValue={value}
              value={actualValue}
              onChange={(e) => setActualValue(e?.toString() ?? "")}
            />
          </>
        ) : !rows ? (
          <>
            <input
              ref={input}
              type={type}
              id={name}
              name={name}
              autoComplete={autoComplete}
              required={required}
              minLength={minLength}
              maxLength={maxLength}
              defaultValue={value}
              value={actualValue}
              onChange={(e) => setActualValue(e.currentTarget.value)}
              onBlur={onBlur}
              disabled={disabled}
              readOnly={readOnly}
              placeholder={placeholder}
              pattern={pattern !== "" && pattern !== undefined ? pattern : undefined}
              className={clsx(
                "input-bordered input w-full",
                className,
                classNameBg,
                disabled || readOnly ? "cursor-not-allowed bg-gray-100" : "hover:bg-gray-50 focus:bg-gray-50",
                icon && "pl-10",
                borderless && "border-transparent"
              )}
            />
            {button}
          </>
        ) : (
          <textarea
            rows={rows}
            ref={textArea}
            id={name}
            name={name}
            autoComplete={autoComplete}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            defaultValue={value}
            value={actualValue}
            onChange={(e) => setActualValue(e.currentTarget.value)}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
            className={clsx(
              "block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-accent-500 focus:ring-accent-500 sm:text-sm",
              className,
              classNameBg,
              disabled || readOnly ? "cursor-not-allowed bg-gray-100" : "hover:bg-gray-50 focus:bg-gray-50",
              borderless && "border-transparent"
            )}
          />
        )}
      </div>
    </div>
  );
};
export default forwardRef(InputText);
