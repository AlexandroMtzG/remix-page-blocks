import { Link } from "@remix-run/react";
import { MouseEventHandler, ReactNode } from "react";
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
            <button
              onClick={onClick}
              type={type}
              disabled={disabled}
              className={clsx(
                className,
                "inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm focus:border-accent-300 focus:outline-none focus:ring-2",
                disabled && "cursor-not-allowed opacity-75",
                !destructive && "text-accent-700",
                destructive && "text-red-700",
                !disabled && !destructive && "hover:border-accent-300 hover:text-accent-900 focus:ring-accent-500",
                !disabled && destructive && "hover:bg-red-50 focus:ring-red-500"
              )}
            >
              {children}
            </button>
          );
        } else {
          return (
            <Link
              to={to}
              target={target}
              className={clsx(
                className,
                "inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm focus:border-accent-300 focus:outline-none focus:ring-2",
                disabled && "cursor-not-allowed opacity-75",
                !destructive && "text-accent-700",
                destructive && "text-red-700",
                !disabled && !destructive && "hover:border-accent-300 hover:text-accent-900 focus:ring-accent-500",
                !disabled && destructive && "hover:bg-red-50 focus:ring-red-500"
              )}
            >
              {children}
            </Link>
          );
        }
      })()}
    </span>
  );
}
