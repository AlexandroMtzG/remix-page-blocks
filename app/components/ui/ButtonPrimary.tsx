import { Link } from "@remix-run/react";
import { Fragment, MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  to?: string;
  target?: string;
  disabled?: boolean;
  destructive?: boolean;
  isExternal?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonPrimary({ className = "", type = "button", onClick, disabled, destructive, to, target, isExternal = false, children }: Props) {
  const combinedClassName = clsx(className, "btn-sm btn", destructive ? "btn-error" : "btn-primary");

  return (
    <span>
      {(() => {
        if (!to || disabled) {
          return (
            <button onClick={onClick} type={type} disabled={disabled} className={clsx(className, "btn-sm btn", destructive ? "btn-error" : "btn-primary")}>
              {children}
            </button>
          );
        } else if (to && isExternal) {
          return (
            <a href={to} className={combinedClassName} target={target}>
              {children}
            </a>
          );
        } else {
          return (
            <Fragment>
              {to.startsWith("http") ? (
                <a href={to} target={target} className={clsx(className, "btn-sm btn", destructive ? "btn-error" : "btn-primary")}>
                  {children}
                </a>
              ) : (
                <Link
                  reloadDocument
                  to={disabled ? "" : to}
                  target={target}
                  className={clsx(className, "btn-sm btn", destructive ? "btn-error" : "btn-primary")}
                >
                  {children}
                </Link>
              )}
            </Fragment>
          );
        }
      })()}
    </span>
  );
}
