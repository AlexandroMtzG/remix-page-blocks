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
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  reloadDocument?: boolean;
}

export default function ButtonTertiary({ className = "", type = "button", onClick, disabled, destructive, to, target, children, reloadDocument }: Props) {
  return (
    <span>
      {(() => {
        if (!to || disabled) {
          return (
            <button
              onClick={onClick}
              type={type}
              disabled={disabled}
              className={clsx(className, "btn-outline btn-sm btn", destructive ? "btn-error" : "btn-primary")}
            >
              {children}
            </button>
          );
        } else {
          return (
            <Fragment>
              {to.startsWith("http") ? (
                <a href={to} target={target} className={clsx(className, "btn-outline btn-sm btn", destructive ? "btn-error" : "btn-primary")}>
                  {children}
                </a>
              ) : (
                <Link reloadDocument to={to} target={target} className={clsx(className, "btn-outline btn-sm btn", destructive ? "btn-error" : "btn-primary")}>
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
