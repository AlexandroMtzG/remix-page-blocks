import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal } from "react-daisyui";

interface Props {
  type: "success" | "error";
  title?: string;
  description?: string;
  closeText?: string;
  open: boolean;
  onClose: () => void;
  className?: string;
}

export default function OpenModal({ type, title, description, closeText, open, onClose, className }: Props) {
  const { t } = useTranslation();
  const [data, setData] = useState<{ title: string; description: string; closeText?: string }>();

  useEffect(() => {
    if (title && description) {
      setData({ title, description, closeText });
    }
  }, [title, description, closeText]);
  return (
    <Modal open={open} onClickBackdrop={() => onClose()} className="text-gray-900">
      <Modal.Header className="mb-0 font-bold">
        <div className="flex flex-col items-center justify-center space-y-3">
          {type === "success" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : type === "error" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          ) : null}
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
