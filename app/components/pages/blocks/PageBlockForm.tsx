import { useTranslation } from "react-i18next";
import { PageBlockDto } from "~/application/dtos/marketing/PageBlockDto";
import ButtonSecondary from "~/components/ui/ButtonSecondary";
import BannerBlockForm from "./BannerBlockForm";
import CommunityBlockForm from "./CommunityBlockForm";
import FaqBlockForm from "./FaqBlockForm";
import FeaturesBlockForm from "./FeaturesBlockForm";
import FooterBlockForm from "./FooterBlockForm";
import GalleryBlockForm from "./GalleryBlockForm";
import HeaderBlockForm from "./HeaderBlockForm";
import HeroBlockForm from "./HeroBlockForm";
import LogoCloudsBlockForm from "./LogoCloudsBlockForm";
import NewsletterBlockForm from "./NewsletterBlockForm";
import TestimonialsBlockForm from "./TestimonialsBlockForm";
import VideoBlockForm from "./VideoBlockForm";

interface Props {
  type: string;
  item?: PageBlockDto;
  onUpdate: (item: PageBlockDto) => void;
  onClose: () => void;
}
export default function PageBlockForm({ type, item, onUpdate, onClose }: Props) {
  const { t } = useTranslation();
  const block = Block({ type, item, onUpdate, onClose });

  return (
    <div>
      {block}
      <div className="mt-2 flex justify-end">
        <ButtonSecondary onClick={onClose}>{t("shared.close")}</ButtonSecondary>
      </div>
    </div>
  );
}

function Block({ type, item, onUpdate }: Props) {
  if (type === "banner") {
    return <BannerBlockForm item={item?.banner} onUpdate={(banner) => onUpdate({ banner })} />;
  } else if (type === "header") {
    return <HeaderBlockForm item={item?.header} onUpdate={(header) => onUpdate({ header })} />;
  } else if (type === "footer") {
    return <FooterBlockForm item={item?.footer} onUpdate={(footer) => onUpdate({ footer })} />;
  } else if (type === "hero") {
    return <HeroBlockForm item={item?.hero} onUpdate={(hero) => onUpdate({ hero })} />;
  } else if (type === "logoClouds") {
    return <LogoCloudsBlockForm item={item?.logoClouds} onUpdate={(logoClouds) => onUpdate({ logoClouds })} />;
  } else if (type === "gallery") {
    return <GalleryBlockForm item={item?.gallery} onUpdate={(gallery) => onUpdate({ gallery })} />;
  } else if (type === "video") {
    return <VideoBlockForm item={item?.video} onUpdate={(video) => onUpdate({ video })} />;
  } else if (type === "community") {
    return <CommunityBlockForm item={item?.community} onUpdate={(community) => onUpdate({ community })} />;
  } else if (type === "testimonials") {
    return <TestimonialsBlockForm item={item?.testimonials} onUpdate={(testimonials) => onUpdate({ testimonials })} />;
  } else if (type === "faq") {
    return <FaqBlockForm item={item?.faq} onUpdate={(faq) => onUpdate({ faq })} />;
  } else if (type === "features") {
    return <FeaturesBlockForm item={item?.features} onUpdate={(features) => onUpdate({ features })} />;
  } else if (type === "newsletter") {
    return <NewsletterBlockForm item={item?.newsletter} onUpdate={(newsletter) => onUpdate({ newsletter })} />;
  } else {
    return <div>TODO</div>;
  }
}
