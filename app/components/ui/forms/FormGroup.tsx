import { Form, useActionData, useSubmit, useTransition } from "@remix-run/react";
import clsx from "clsx";
import { t } from "i18next";
import { FormEvent, forwardRef, ReactNode, Ref, useEffect, useImperativeHandle, useRef, useState } from "react";
import ButtonSecondary from "../buttons/ButtonSecondary";
import LoadingButton from "../buttons/LoadingButton";
import ConfirmModal, { RefConfirmModal } from "../modals/ConfirmModal";
import ErrorModal, { RefErrorModal } from "../modals/ErrorModal";

export interface RefFormGroup {}

interface Props {
  id?: string | undefined;
  onCancel?: () => void;
  children: ReactNode;
  className?: string;
  classNameFooter?: string;
  editing?: boolean;
  canUpdate?: boolean;
  canDelete?: boolean;
  onSubmit?: (e: FormData) => void | undefined;
  onDelete?: () => void;
  saveAndAddAnother?: boolean;
  confirmationPrompt?: {
    title: string;
    yesTitle?: string;
    noTitle?: string;
    description?: string;
  };
  deleteRedirect?: string;
  actionNames?: {
    create?: string;
    update?: string;
    delete?: string;
  };
}
const FormGroup = (
  {
    id,
    onCancel,
    children,
    className,
    classNameFooter,
    editing,
    canUpdate = true,
    canDelete = true,
    confirmationPrompt,
    onSubmit,
    saveAndAddAnother,
    deleteRedirect,
    onDelete,
    actionNames,
  }: Props,
  ref: Ref<RefFormGroup>
) => {
  useImperativeHandle(ref, () => ({}));

  const actionData = useActionData<{
    error?: string;
  }>();
  const transition = useTransition();
  const loading = transition.state === "submitting";
  const submit = useSubmit();

  const confirmRemove = useRef<RefConfirmModal>(null);
  const confirmSubmit = useRef<RefConfirmModal>(null);
  const errorModal = useRef<RefErrorModal>(null);

  const [error, setError] = useState<string>();
  const [formData, setFormData] = useState<FormData>();

  useEffect(() => {
    setError(actionData?.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData]);

  useEffect(() => {
    setError(undefined);
    if (error) {
      errorModal.current?.show(t("shared.error"), error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  function remove() {
    confirmRemove.current?.show(t("shared.confirmDelete"), t("shared.delete"), t("shared.cancel"), t("shared.warningCannotUndo"));
  }

  function yesRemove() {
    if (onDelete) {
      onDelete();
    } else {
      const form = new FormData();
      form.set("action", actionNames?.delete ?? "delete");
      form.set("id", id ?? "");
      form.set("redirect", deleteRedirect ?? "");
      submit(form, {
        method: "post",
      });
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.stopPropagation();
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (confirmationPrompt) {
      setFormData(formData);
      confirmSubmit.current?.show(confirmationPrompt.title, confirmationPrompt.yesTitle, confirmationPrompt.noTitle, confirmationPrompt.description);
    } else {
      if (onSubmit !== undefined) {
        onSubmit(formData);
      } else {
        submit(formData, {
          method: "post",
        });
      }
    }
  }

  function yesSubmit() {
    if (formData) {
      if (onSubmit !== undefined) {
        onSubmit(formData);
      } else {
        submit(formData, {
          method: "post",
        });
      }
    }
  }

  return (
    <Form method="post" acceptCharset="utf-8" className={clsx(className, "py-1")} onSubmit={handleSubmit}>
      <input type="hidden" readOnly name="action" value={id ? actionNames?.update ?? "edit" : actionNames?.create ?? "create"} />
      <div className="space-y-3">
        {children}

        {(!id || editing) && (
          <div className={clsx(classNameFooter, "flex justify-between space-x-2")}>
            <div>
              {id && canDelete && (
                <ButtonSecondary disabled={loading || !canDelete} destructive={true} type="button" onClick={remove}>
                  <div>{t("shared.delete")}</div>
                </ButtonSecondary>
              )}
            </div>

            <div className="flex items-center space-x-2">
              {onCancel && (
                <ButtonSecondary onClick={onCancel} disabled={loading}>
                  <div>{t("shared.cancel")}</div>
                </ButtonSecondary>
              )}
              {id === undefined && saveAndAddAnother ? (
                <div>
                  <LoadingButton type="submit" disabled={loading}>
                    <div>{t("shared.saveAndAdd")}</div>
                  </LoadingButton>
                </div>
              ) : (
                <LoadingButton type="submit" disabled={loading || (id !== undefined && !canUpdate)}>
                  {t("shared.save")}
                </LoadingButton>
              )}
            </div>
          </div>
        )}
      </div>
      <ConfirmModal ref={confirmSubmit} onYes={yesSubmit} />
      <ConfirmModal ref={confirmRemove} onYes={yesRemove} />
      <ErrorModal ref={errorModal} />
    </Form>
  );
};

export default forwardRef(FormGroup);
