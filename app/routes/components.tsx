import Footer from "~/components/front/Footer";
import Header from "~/components/front/Header";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { i18nHelper } from "~/locale/i18n.utils";
import ServerError from "~/components/ui/ServerError";
import { Language } from "remix-i18next";
import WarningBanner from "~/components/ui/WarningBanner";
import ButtonPrimary from "~/components/ui/ButtonPrimary";
import ButtonSecondary from "~/components/ui/ButtonSecondary";
import ButtonTertiary from "~/components/ui/ButtonTertiary";
import BannerTop from "~/components/front/blocks/variants/banner/BannerTop";
import PageBlockUtils from "~/utils/pages/PageBlockUtils";
import InputText from "~/components/ui/InputText";
import InputNumber from "~/components/ui/InputNumber";
import InputCheckbox from "~/components/ui/InputCheckbox";
import InputCheckboxWithDescription from "~/components/ui/InputCheckboxWithDescription";
import { useState } from "react";
import HeroDefault from "~/components/front/blocks/variants/hero/HeroDefault";
import HeroWithImage from "~/components/front/blocks/variants/hero/HeroWithImage";
import TestimonialsSimple from "~/components/front/blocks/variants/testimonials/TestimonialsSimple";
import FeaturesList from "~/components/front/blocks/variants/features/FeaturesList";
import FeaturesCards from "~/components/front/blocks/variants/features/FeaturesCards";
import NewsletterSimple from "~/components/front/blocks/variants/newsletter/NewsletterSimple";
import NewsletterRightForm from "~/components/front/blocks/variants/newsletter/NewsletterRightForm";
import FaqSimple from "~/components/front/blocks/variants/faq/FaqSimple";
import FooterColumns from "~/components/front/blocks/variants/footer/FooterColumns";
import OpenModal from "~/components/ui/OpenModal";

type LoaderData = {
  title: string;
  i18n: Record<string, Language>;
};
export let loader: LoaderFunction = async ({ request }) => {
  let { translations } = await i18nHelper(request);
  const data: LoaderData = {
    title: `Components`,
    i18n: translations,
  };
  return json(data);
};

export const meta: MetaFunction = ({ data }) => ({
  title: data?.title,
});

export default function Components() {
  const [success, setSuccess] = useState<{ title: string; description: string; closeText: string }>();
  const [error, setError] = useState<{ title: string; description: string; closeText: string }>();
  return (
    <div className="relative">
      <Header />
      <div className="mx-auto max-w-5xl space-y-4 py-4 pb-12">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
            <UiLibrary library="DaisyUI" title="Buttons" href="https://dev.daisyui.com/components/button/" />
            <div className="flex space-x-2">
              <ButtonPrimary>Primary</ButtonPrimary> <ButtonPrimary destructive>Primary Destructive</ButtonPrimary>
            </div>
            <div className="flex space-x-2">
              <ButtonSecondary>Secondary</ButtonSecondary> <ButtonSecondary destructive>Secondary Destructive</ButtonSecondary>
            </div>
            <div className="flex space-x-2">
              <ButtonTertiary>Tertiary</ButtonTertiary> <ButtonTertiary destructive>Tertiary Destructive</ButtonTertiary>
            </div>
          </div>

          <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
            <UiLibrary library="DaisyUI" title="Links" href="https://dev.daisyui.com/components/button/" />
            <div className="flex space-x-2">
              <ButtonPrimary to="/components">Primary</ButtonPrimary>
              <ButtonPrimary destructive to="/components">
                Primary Destructive
              </ButtonPrimary>
            </div>
            <div className="flex space-x-2">
              <ButtonSecondary to="/components">Secondary</ButtonSecondary>
              <ButtonSecondary destructive to="/components">
                Secondary Destructive
              </ButtonSecondary>
            </div>
            <div className="flex space-x-2">
              <ButtonTertiary to="/components">Tertiary</ButtonTertiary>
              <ButtonTertiary destructive to="/components">
                Tertiary Destructive
              </ButtonTertiary>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
            <UiLibrary library="DaisyUI" title="Input" href="https://dev.daisyui.com/components/input/" />
            <InputText title="Input Text" />
            <InputNumber title="Input Number" />
          </div>

          <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
            <UiLibrary library="DaisyUI" title="Checkbox" href="https://dev.daisyui.com/components/checkbox/" />
            <InputCheckbox name="simple" title="Input Checkbox" />
            <InputCheckbox name="toggle" title="Input Toggle" asToggle={true} />
            <InputCheckboxWithDescription name="with-description" title="Input Checkbox with Description" description="Description" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
            <UiLibrary library="DaisyUI" title="Alerts" href="https://dev.daisyui.com/components/alert/" />
            <div className="flex space-x-2">
              <WarningBanner title="Title" text="Text" />
            </div>
          </div>

          <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
            <UiLibrary library="DaisyUI" title="Modals" href="https://dev.daisyui.com/components/modal/" />
            <div className="flex space-x-2">
              <ButtonPrimary onClick={() => setSuccess({ title: "Success title", description: "Success description", closeText: "Close text" })}>
                Success
              </ButtonPrimary>
              <ButtonPrimary destructive onClick={() => setError({ title: "Error title", description: "Error description", closeText: "Close text" })}>
                Error
              </ButtonPrimary>
            </div>
            <OpenModal type="success" {...success} closeText={success?.closeText} open={success !== undefined} onClose={() => setSuccess(undefined)} />
            <OpenModal type="error" {...error} open={error !== undefined} onClose={() => setError(undefined)} />
          </div>
        </div>

        <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
          <UiLibrary library="DaisyUI" title="Banners" href="https://dev.daisyui.com/components/alert/" />
          <div className="flex space-x-2">
            <BannerTop item={PageBlockUtils.defaultBlocks.banner!} />
          </div>
        </div>

        <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
          <UiLibrary library="DaisyUI" title="Header" href="https://dev.daisyui.com/components/navbar/" />
          <div className="flex space-x-2">
            <Header item={PageBlockUtils.defaultBlocks.header!} />
          </div>
        </div>

        <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
          <UiLibrary library="Tailblocks" title="Hero Simple" href="https://tailblocks.cc/" />
          <div className="relative space-y-6">
            <HeroDefault item={PageBlockUtils.defaultBlocks.hero!} />
          </div>
        </div>

        <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
          <UiLibrary library="Tailblocks" title="Hero with Image" href="https://tailblocks.cc/" />
          <div className="relative space-y-6">
            <HeroWithImage item={PageBlockUtils.defaultBlocks.hero!} />
          </div>
        </div>

        <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
          <UiLibrary library="Tailblocks" title="Testimonials" href="https://tailblocks.cc/" />
          <div className="space-y-6">
            <TestimonialsSimple item={PageBlockUtils.defaultBlocks.testimonials!} />
          </div>
        </div>

        <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
          <UiLibrary library="Tailblocks" title="Features List" href="https://tailblocks.cc/" />
          <div className="space-y-6">
            <FeaturesList item={PageBlockUtils.defaultBlocks.features!} />
          </div>
        </div>

        <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
          <UiLibrary library="Tailblocks" title="Features with Cards" href="https://tailblocks.cc/" />
          <div className="space-y-6">
            <FeaturesCards item={PageBlockUtils.defaultBlocks.features!} />
          </div>
        </div>

        <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
          <UiLibrary library="Tailblocks" title="Newsletter Simple" href="https://tailblocks.cc/" />
          <div className="space-y-6">
            <NewsletterSimple item={PageBlockUtils.defaultBlocks.newsletter!} />
          </div>
        </div>

        <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
          <UiLibrary library="Tailblocks" title="Newsletter with Right Form" href="https://tailblocks.cc/" />
          <div className="space-y-6">
            <NewsletterRightForm item={PageBlockUtils.defaultBlocks.newsletter!} />
          </div>
        </div>

        <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
          <UiLibrary library="Tailblocks" title="FAQ" href="https://tailblocks.cc/" />
          <div className="space-y-6">
            <FaqSimple item={PageBlockUtils.defaultBlocks.faq!} />
          </div>
        </div>

        <div className="space-y-2 rounded-md border-2 border-dashed border-gray-800 p-2">
          <UiLibrary library="Tailblocks" title="Footer" href="https://tailblocks.cc/" />
          <div className="space-y-6">
            <FooterColumns item={PageBlockUtils.defaultBlocks.footer!} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return <ServerError error={error} />;
}

function UiLibrary({ library, title, href }: { library: string; title: string; href: string }) {
  return (
    <div className="flex justify-between space-x-2 pr-2">
      <div className="font-extrabold">{title}</div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2 border-b border-dashed border-theme-500 font-bold hover:border-dotted"
      >
        <div>{library}</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path
            fillRule="evenodd"
            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
}
