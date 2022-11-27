import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FooterBlockDto } from "~/application/dtos/marketing/FooterBlockDto";
import { defaultFooter } from "~/utils/services/pages/defaultFooter";
import FooterColumns from "./blocks/variants/footer/FooterColumns";

export default function Footer({ item }: { item?: FooterBlockDto }) {
  const { t } = useTranslation();
  const [footer, setFooter] = useState(item);
  useEffect(() => {
    if (!footer) {
      setFooter(defaultFooter({ t }));
    } else {
      setFooter(item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);
  return <>{footer && <>{footer.style === "columns" && <FooterColumns item={footer} />}</>}</>;
}
