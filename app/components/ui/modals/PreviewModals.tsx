import { useRef, useState } from "react";
import ButtonSecondary from "../buttons/ButtonSecondary";
import SuccessModal, { RefSuccessModal } from "./SuccessModal";
import ErrorModal, { RefErrorModal } from "./ErrorModal";
import ConfirmModal, { RefConfirmModal } from "./ConfirmModal";
import Modal from "./Modal";

export default function PreviewModals() {
  const successModal = useRef<RefSuccessModal>(null);
  const errorModal = useRef<RefErrorModal>(null);
  const confirmModal = useRef<RefConfirmModal>(null);

  const [open, setOpen] = useState(false);

  function showSuccessModal() {
    successModal.current?.show("Title", "Description...");
  }
  function showErrorModal() {
    errorModal.current?.show("Title", "Description...");
  }
  function showConfirmModal() {
    confirmModal.current?.setValue({ name: "Sample" });
    confirmModal.current?.show("Title", "Confirm", "Cancel", "Description...");
  }
  function onYes(value?: any) {
    if (value) {
      alert("confirmed with value: " + JSON.stringify(value));
    } else {
      alert("yes");
    }
  }

  return (
    <div className="border border-dashed border-gray-300 bg-white p-6">
      <div id="modals" className="w-full space-y-2">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 sm:flex-row sm:items-end sm:justify-center sm:space-y-0 sm:space-x-4">
          <ButtonSecondary onClick={() => showSuccessModal()}>Success Modal</ButtonSecondary>
          <ButtonSecondary onClick={() => showErrorModal()}>Error Modal</ButtonSecondary>
          <ButtonSecondary onClick={() => showConfirmModal()}>Confirm Modal</ButtonSecondary>
          <ButtonSecondary onClick={() => setOpen(!open)}>Empty modal</ButtonSecondary>
        </div>
        <SuccessModal ref={successModal} onClosed={() => alert("Closed success modal")} />
        <ErrorModal ref={errorModal} onClosed={() => alert("Closed error modal")} />
        <ConfirmModal ref={confirmModal} onNo={() => alert("No")} onYes={onYes} />
        <Modal open={open} setOpen={setOpen}>
          Content here
        </Modal>
        {/* <Modal ref={emptyModal}>
        <div>Your content here...</div>
      </Modal> */}
      </div>
    </div>
  );
}
