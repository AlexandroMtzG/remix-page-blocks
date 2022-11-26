import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PageBlockDto } from "~/application/dtos/marketing/PageBlockDto";
import ButtonPrimary from "~/components/ui/ButtonPrimary";
import InputText from "~/components/ui/InputText";
import PageBlockUtils from "~/utils/pages/PageBlockUtils";
import { defaultLandingPage } from "~/utils/services/pages/defaultLandingPage";
import { saasrockLandingPage } from "~/utils/services/pages/templates/saasrockLandingPage";

type TemplateDto = {
  title: string;
  blocks: PageBlockDto[];
};
export default function TemplateEditor({ items, onSelected }: { items: PageBlockDto[]; onSelected: (items: PageBlockDto[]) => void }) {
  const { t } = useTranslation();
  const [templates, setTemplates] = useState<TemplateDto[]>([]);
  const [currentJson, setCurrentJson] = useState("");
  useEffect(() => {
    const templates: TemplateDto[] = [
      { title: "Current", blocks: items },
      { title: "Remix Page Blocks (default)", blocks: defaultLandingPage({ t }) },
      { title: "SaasRock.com template", blocks: saasrockLandingPage() },
    ];
    setCurrentJson(PageBlockUtils.downloadBlocks(templates[0].blocks));
    setTemplates(templates);
  }, [items, t]);

  function onSave() {
    // const jsonBlocks = PageBlockUtils.downloadBlocks(currentBlocks);
    try {
      const blocks = JSON.parse(currentJson) as PageBlockDto[];
      onSelected(blocks);
    } catch (e: any) {
      alert("Error: " + e.message);
    }
  }
  return (
    <div>
      <div className="space-y-3">
        <div className="flex space-x-2">
          {templates.map((t) => (
            <button
              key={t.title}
              type="button"
              onClick={() => setCurrentJson(PageBlockUtils.downloadBlocks(t.blocks))}
              className="inline-flex items-center rounded border border-transparent bg-theme-100 px-2 py-2 text-xs font-medium text-theme-700 hover:bg-theme-200 focus:outline-none focus:ring-2 focus:ring-theme-500 focus:ring-offset-2"
            >
              {t.title}
            </button>
          ))}
        </div>
        <div>
          <InputText
            name="configuration"
            title="Configuration"
            editor="monaco"
            editorLanguage="json"
            value={currentJson}
            setValue={setCurrentJson}
            editorSize="lg"
          />
        </div>
        <div className="flex justify-end">
          <ButtonPrimary onClick={onSave}>Save</ButtonPrimary>
        </div>
      </div>
    </div>
  );
}
