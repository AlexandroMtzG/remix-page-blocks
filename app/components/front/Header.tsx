import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HeaderBlockDto } from "~/application/dtos/marketing/HeaderBlockDto";
import { defaultHeader } from "~/utils/services/pages/defaultHeader";
import HeaderSimple from "./blocks/variants/header/HeaderSimple";

export default function Header({ item }: { item?: HeaderBlockDto }) {
  const { t } = useTranslation();
  const [header, setHeader] = useState(item);
  useEffect(() => {
    if (!header) {
      setHeader(defaultHeader({ t }));
    } else {
      setHeader(item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);
  return <>{header && <>{header.style === "simple" && <HeaderSimple item={header} />}</>}</>;
}
