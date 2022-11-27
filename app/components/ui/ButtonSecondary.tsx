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
}

export default function ButtonSecondary({ className = "", type = "button", onClick, disabled, destructive, to, target, children }: Props) {
  return (
    <span>
      {(() => {
        if (!to || disabled) {
          return (
            <button onClick={onClick} type={type} disabled={disabled} className={clsx(className, "btn-sm btn", destructive ? "btn-error" : "btn-secondary")}>
              {children}
            </button>
          );
        } else {
          return (
            <Fragment>
              {to.startsWith("http") ? (
                <a href={to} target={target} className={clsx(className, "btn-sm btn", destructive ? "btn-error" : "btn-secondary")}>
                  {children}
                </a>
              ) : (
                <Link reloadDocument to={to} className={clsx(className, "btn-sm btn", destructive ? "btn-error" : "btn-secondary")}>
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
