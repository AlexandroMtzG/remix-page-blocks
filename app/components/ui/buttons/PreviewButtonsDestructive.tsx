import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import ButtonTertiary from "./ButtonTertiary";

export default function PreviewButtonsDestructive() {
  return (
    <div id="buttons-as-links">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <div className="w-full space-y-2">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 sm:flex-row sm:items-end sm:justify-center sm:space-y-0 sm:space-x-4">
            <ButtonPrimary onClick={() => alert("Clicked primary destructive button")} destructive={true}>
              Primary
            </ButtonPrimary>
            <ButtonSecondary onClick={() => alert("Clicked secondary destructive button")} destructive={true}>
              Secondary
            </ButtonSecondary>
            <ButtonTertiary onClick={() => alert("Clicked tertiary destructive button")} destructive={true}>
              Tertiary
            </ButtonTertiary>
          </div>
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 sm:flex-row sm:items-end sm:justify-center sm:space-y-0 sm:space-x-4">
            <ButtonPrimary disabled={true} destructive={true}>
              Primary
            </ButtonPrimary>
            <ButtonSecondary disabled={true} destructive={true}>
              Secondary
            </ButtonSecondary>
            <ButtonTertiary disabled={true} destructive={true}>
              Tertiary
            </ButtonTertiary>
          </div>
        </div>
      </div>
    </div>
  );
}
