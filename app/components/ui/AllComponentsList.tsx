import ButtonSecondary from "./buttons/ButtonSecondary";
import SlideOver from "./slideOvers/SlideOver";
import { useState } from "react";
import clsx from "clsx";
import PreviewBreadcrumbs from "./breadcrumbs/PreviewBreadcrumbs";
import PreviewButtons from "./buttons/PreviewButtons";
import PreviewButtonsAsLinks from "./buttons/PreviewButtonsAsLinks";
import PreviewButtonsDestructive from "./buttons/PreviewButtonsDestructive";
import PreviewModals from "./modals/PreviewModals";
import PreviewBanners from "./banners/PreviewBanners";
import PreviewEmptyStates from "./emptyState/PreviewEmptyStates";
import PreviewUploadersDocument from "./uploaders/PreviewUploadersDocument";
import PreviewPdfViewers from "./pdf/PreviewPdfViewers";
import PreviewLoaders from "./loaders/PreviewLoaders";
import PreviewInputs from "./input/PreviewInputs";
// import PreviewDatepickers from "./datepickers/PreviewDatepickers";
import PreviewDropdowns from "./dropdowns/PreviewDropdowns";
import PreviewTabs from "./tabs/PreviewTabs";

interface Props {
  className?: string;
  withSlideOvers?: boolean;
}

export default function AllComponentsList({ className, withSlideOvers }: Props) {
  const [showRightSlideOver, setShowRightSlideOver] = useState(false);
  return (
    <div>
      <div className={clsx(className, "space-y-6 text-slate-900")}>
        <PreviewInputs />

        <PreviewBreadcrumbs />

        <PreviewTabs />

        <PreviewButtons />

        <div className="space-y-1">
          <h3 className="text-sm font-medium">Buttons - as Links</h3>
          <div className="border border-dashed border-gray-300 bg-white p-6">
            <PreviewButtonsAsLinks />
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-medium">Buttons - Destructive</h3>
          <div className="border border-dashed border-gray-300 bg-white p-6">
            <PreviewButtonsDestructive />
          </div>
        </div>

        <PreviewDropdowns />

        <div className="space-y-1">
          <h3 className="text-sm font-medium">Modals</h3>
          <div className="border border-dashed border-gray-300 bg-white p-6">
            <PreviewModals />
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-medium">Banners</h3>
          <div className="border border-dashed border-gray-300 bg-white p-6">
            <PreviewBanners />
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-medium">Empty States</h3>
          <div className="border border-dashed border-gray-300 bg-white p-6">
            <PreviewEmptyStates />
          </div>
        </div>

        <PreviewUploadersDocument />

        <div className="space-y-1">
          <h3 className="text-sm font-medium">Pdf Viewer</h3>
          <div className="border border-dashed border-gray-300 bg-white p-6">
            <PreviewPdfViewers />
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-medium">Loaders</h3>
          <div className="border border-dashed border-gray-300 bg-white p-6">
            <PreviewLoaders />
          </div>
        </div>

        {withSlideOvers && (
          <div className="space-y-1">
            <h3 className="text-sm font-medium">Slide-overs</h3>
            <div className="border border-dashed border-gray-300 bg-white p-6">
              <ButtonSecondary onClick={() => setShowRightSlideOver(!showRightSlideOver)}>Right slide-over</ButtonSecondary>
            </div>
          </div>
        )}

        {/*SlideOver */}
        {showRightSlideOver && <SlideOver onClose={() => setShowRightSlideOver(false)}>Your content here...</SlideOver>}
      </div>
    </div>
  );
}
