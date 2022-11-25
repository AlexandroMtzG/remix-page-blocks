import { useNavigate } from "@remix-run/react";
import Footer from "../front/Footer";
import Logo from "../front/Logo";

interface Props {
  withLogo?: boolean;
  withFooter?: boolean;
  withGoBack?: boolean;
}
export default function Page404({ withLogo = true, withFooter = true, withGoBack = true }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="flex min-h-full flex-col pt-16 pb-12">
          <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
            {withLogo && (
              <div className="flex flex-shrink-0 justify-center">
                <Logo />
              </div>
            )}
            <div className="py-16">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-theme-600">404 error</p>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">Page not found.</h1>
                <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                {withGoBack && (
                  <div className="mt-4 flex">
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="w-full text-center text-sm font-medium text-theme-600 hover:text-theme-500 dark:text-theme-400"
                    >
                      <span aria-hidden="true"> &larr;</span> Go back
                    </button>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
      {withFooter && <Footer />}
    </>
  );
}
