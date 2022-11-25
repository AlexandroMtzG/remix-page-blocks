import clsx from "clsx";
import { Link } from "@remix-run/react";
import IconLight from "~/assets/img/icon-light.png";
import IconDark from "~/assets/img/icon-dark.png";

interface Props {
  className?: string;
  size?: string;
}

export default function Icon({ className = "", size = "h-9" }: Props) {
  return (
    <Link to="/" className={clsx(className, "flex")}>
      {/* <BrandIcon className="h-10 w-auto mx-auto" /> */}
      <img className={clsx(size, "hidden w-auto dark:block")} src={IconDark} alt="Logo" />
      <img className={clsx(size, "w-auto dark:hidden")} src={IconLight} alt="Logo" />
    </Link>
  );
}
