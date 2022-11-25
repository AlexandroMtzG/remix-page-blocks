import InfoBanner from "./InfoBanner";
import WarningBanner from "./WarningBanner";

export default function PreviewBanners() {
  return (
    <div id="banners" className="not-prose w-full space-y-2 text-gray-900">
      <h3 className="text-sm font-medium">InfoBanner</h3>
      <InfoBanner title="Info" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut..." />

      <h3 className="text-sm font-medium">Warning</h3>
      <WarningBanner title="Warning" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut..." />

      <h3 className="text-sm font-medium">Warning with Link</h3>
      <WarningBanner
        title="WarningBanner with Redirect"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut..."
        redirect="https://saasrock.com/?ref=remix-page-blocks-preview-banners"
      />
    </div>
  );
}
