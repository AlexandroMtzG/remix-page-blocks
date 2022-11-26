import { useSearchParams } from "@remix-run/react";
import { useState } from "react";
import { PageBlockDto } from "~/application/dtos/marketing/PageBlockDto";
import ButtonSecondary from "~/components/ui/buttons/ButtonSecondary";
import Modal from "~/components/ui/modals/Modal";
import OpenErrorModal from "~/components/ui/modals/OpenErrorModal";
import OpenSuccessModal from "~/components/ui/modals/OpenSuccessModal";
import PageBlockUtils from "~/utils/pages/PageBlockUtils";
import TemplateEditor from "./TemplateEditor";

type MessageDto = {
  success?: { title: string; message: string };
  error?: { title: string; message: string };
};
export default function PageBlockEditMode({ items, onSetBlocks }: { items: PageBlockDto[]; onSetBlocks: (items: PageBlockDto[]) => void }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [settingTemplate, setSettingTemplate] = useState(false);
  const [message, setMessage] = useState<MessageDto>();

  function isEditMode() {
    return searchParams.get("editMode") !== "false";
  }
  function toggleEditMode() {
    if (searchParams.get("editMode") === "false") {
      setSearchParams({ editMode: "true" });
    } else {
      setSearchParams({ editMode: "false" });
    }
  }

  function onDownload() {
    if (items.length === 0) {
      setMessage({ error: { title: "Error", message: "No blocks to download" } });
      return;
    }

    const jsonBlocks = PageBlockUtils.downloadBlocks(items);
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(jsonBlocks);
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `blocks.json`);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    setMessage({
      success: {
        title: "Blocks Downloaded",
        message: "Paste the blocks at app/utils/services/pages/defaultLandingPage.ts 'const blocks: PageBlockDto[] = [...'",
      },
    });
  }

  function onSetTemplate() {
    setSettingTemplate(true);
  }

  function onSelectedBlocks(items: PageBlockDto[]) {
    setSettingTemplate(false);
    onSetBlocks(items);
  }

  return (
    <div>
      {isEditMode() && (
        <div className="bg-gray-900 p-2 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <div className="flex justify-center space-x-4">
            <ButtonSecondary onClick={toggleEditMode}>Exit Edit Mode</ButtonSecondary>
            <ButtonSecondary onClick={onDownload}>Download Blocks</ButtonSecondary>
            <ButtonSecondary onClick={onSetTemplate}>Change template</ButtonSecondary>
          </div>
        </div>
      )}

      <OpenSuccessModal
        title={message?.success?.title}
        description={message?.success?.message}
        open={!!message?.success}
        onClose={() => setMessage(undefined)}
      />

      <OpenErrorModal title={message?.error?.title} description={message?.error?.message} open={!!message?.error} onClose={() => setMessage(undefined)} />

      <Modal open={settingTemplate} setOpen={setSettingTemplate}>
        <div>
          <TemplateEditor items={items} onSelected={onSelectedBlocks} />
        </div>
      </Modal>
    </div>
  );
}
