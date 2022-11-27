import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal } from "react-daisyui";

interface Props {
  title?: string;
  description?: string;
  closeText?: string;
  open: boolean;
  onClose: () => void;
  className?: string;
}

export default function OpenSuccessModal({ title, description, closeText, open, onClose, className }: Props) {
  const { t } = useTranslation();
  const [data, setData] = useState<{ title: string; description: string; closeText?: string }>();

  useEffect(() => {
    if (title && description) {
      setData({ title, description, closeText });
    }
  }, [title, description, closeText]);
  return (
    <Modal open={open} onClickBackdrop={() => onClose()}>
      <Modal.Header className="font-bold">
        <div className="flex flex-col items-center justify-center space-y-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>{title}</div>
        </div>
      </Modal.Header>
      {description && <Modal.Body className="flex justify-center">{description}</Modal.Body>}
      <Modal.Actions>
        <Button className="btn-secondary btn w-full" onClick={onClose}>
          {data?.closeText ?? t("shared.close")}
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
