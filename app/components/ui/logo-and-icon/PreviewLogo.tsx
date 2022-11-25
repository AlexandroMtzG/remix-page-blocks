import LogoLight from "~/assets/img/logo-light.png";
import LogoDark from "~/assets/img/logo-dark.png";

export default function PreviewLogo() {
  return (
    <div id="logo" className="w-full space-y-3 lg:grid lg:grid-cols-2 lg:space-y-0">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 sm:flex-row sm:items-end sm:justify-center sm:space-y-0 sm:space-x-4">
          <img className="mx-auto h-10 w-auto" src={LogoLight} alt="Logo" />
        </div>
      </div>

      <div className="border border-dashed border-gray-500 bg-gray-900 p-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 sm:flex-row sm:items-end sm:justify-center sm:space-y-0 sm:space-x-4">
          <img className="mx-auto h-10 w-auto" src={LogoDark} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
