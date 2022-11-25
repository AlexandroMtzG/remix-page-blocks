import LogoLight from "~/assets/img/logo-light.png";
import LogoDark from "~/assets/img/logo-dark.png";
import clsx from "clsx";
import { Link } from "@remix-run/react";

interface Props {
  className?: string;
  size?: string;
  to?: string;
}

export default function Logo({ className = "", size = "h-9", to }: Props) {
  return (
    <Link to={to ?? "/"} className={clsx(className, "flex")}>
      {/* <BrandLogo className="h-10 w-auto mx-auto" /> */}
      <img className={clsx(size, "mx-auto hidden w-auto dark:block")} src={LogoDark} alt="Logo" />
      <img className={clsx(size, "mx-auto w-auto dark:hidden")} src={LogoLight} alt="Logo" />
    </Link>
  );
}
