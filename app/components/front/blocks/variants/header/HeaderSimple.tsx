import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, useLocation } from "@remix-run/react";
import Logo from "~/components/front/Logo";
import DarkModeToggle from "~/components/ui/toggles/DarkModeToggle";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { HeaderBlockDto } from "~/application/dtos/marketing/HeaderBlockDto";
import HeaderFlyoutItem from "~/components/ui/headers/HeaderFlyoutItem";
import Icon from "~/components/front/Icon";
import LocaleSelector from "~/components/ui/selectors/LocaleSelector";

export default function HeaderSimple({ item }: { item: HeaderBlockDto }) {
  const { t } = useTranslation();

  const location = useLocation();

  const [open, setOpen] = useState(false);
  function isCurrent(path: string): boolean {
    return location.pathname === path;
  }

  return (
    <div>
      <div className="pb-6">
        <div className="relative pt-6 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                <div className="flex w-full items-center justify-between md:w-auto">
                  {item.withLogo ? (
                    <>
                      <Logo className="hidden lg:block" size="h-9" />
                      <Icon className="lg:hidden" size="h-9" />
                    </>
                  ) : (
                    <div></div>
                  )}
                  <div className="-mr-1 flex items-center md:hidden">
                    <div className="flex">
                      {item.withSignInAndSignUp && (
                        <div className="inline-flex space-x-2 rounded-md">
                          {/* <LocaleSelector className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-sm text-gray-900 dark:text-slate-300" /> */}

                          <a
                            href="#"
                            className="inline-flex items-center rounded-sm border border-transparent px-4 py-2 text-sm font-medium text-gray-900 dark:text-slate-300"
                          >
                            <div>{t("shared.signUp")}</div>
                          </a>
                          <a
                            href="#"
                            className="inline-flex items-center rounded-sm border border-transparent px-4 py-2 text-sm font-medium text-gray-900 dark:text-slate-300"
                          >
                            <div>{t("shared.signIn")}</div>
                          </a>
                        </div>
                      )}
                    </div>
                    {item.links.length > 0 && (
                      <button
                        onClick={() => setOpen(!open)}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:bg-gray-900 dark:hover:bg-gray-600"
                        id="main-menu"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">{t("shared.close")}</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="hidden space-x-2 sm:space-x-4 md:flex md:space-x-6">
                {item.links.map((link, idx) => {
                  return (
                    <Fragment key={idx}>
                      {!link.items || link.items.length === 0 ? (
                        <Fragment>
                          {link.path?.startsWith("http") ? (
                            <a
                              href={link.path ?? ""}
                              target={link.target}
                              className={clsx(
                                link.className,
                                "rounded-sm px-3 py-1 text-base font-medium leading-6 transition duration-150 ease-in-out focus:outline-none",
                                !isCurrent(link.path ?? "") && "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",
                                isCurrent(link.path ?? "") && "text-gray-900 dark:text-white"
                              )}
                            >
                              {t(link.title)}
                            </a>
                          ) : (
                            <Link
                              to={link.path ?? ""}
                              className={clsx(
                                link.className,
                                "rounded-sm px-3 py-1 text-base font-medium leading-6 transition duration-150 ease-in-out focus:outline-none",
                                !isCurrent(link.path ?? "") && "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",
                                isCurrent(link.path ?? "") && "text-gray-900 dark:text-white"
                              )}
                            >
                              {t(link.title)}
                            </Link>
                          )}
                        </Fragment>
                      ) : (
                        <HeaderFlyoutItem
                          className="rounded-sm px-3 py-1 text-base font-medium leading-6 transition duration-150 ease-in-out focus:outline-none"
                          title={t(link.title)}
                          items={link.items}
                        />
                      )}
                    </Fragment>
                  );
                })}
                {item.withLanguageSwitcher && <LocaleSelector className="hidden lg:block" />}
                {item.withThemeSwitcher && <DarkModeToggle className="hidden lg:flex" />}
              </div>
              <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
                <span className="inline-flex space-x-2">
                  {item.withSignInAndSignUp && (
                    <>
                      <a
                        href="#"
                        className="inline-flex items-center rounded-sm border border-transparent px-4 py-2 text-base font-medium text-slate-500 dark:text-white"
                      >
                        {t("shared.signUp")}
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-theme-600 shadow hover:bg-gray-50 dark:bg-slate-800 dark:text-white dark:hover:text-slate-300"
                      >
                        {t("shared.signIn")}
                      </a>
                    </>
                  )}
                </span>
              </div>
            </nav>
          </div>

          {/* Mobile menu */}
          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute inset-x-0 top-0 z-40 origin-top-right transform p-2 transition md:hidden">
              <div className="overflow-visible rounded-lg border border-gray-200 bg-slate-50 shadow-xl ring-1 ring-black ring-opacity-5 dark:border-gray-700 dark:bg-slate-800">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>{item.withLogo && <Icon />}</div>
                  <div className="-mr-2">
                    <button
                      onClick={() => setOpen(!open)}
                      type="button"
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                    >
                      <span className="sr-only">{t("shared.close")}</span>
                      {/* Heroicon name: x */}
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                  <div className="px-2 pt-2 pb-3" role="none">
                    {item.links.map((link, idx) => {
                      return (
                        <Fragment key={idx}>
                          {link.path ? (
                            <>
                              {link.path.startsWith("https:") ? (
                                <a
                                  href={link.path}
                                  target={link.target}
                                  role="menuitem"
                                  className={clsx(
                                    "block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-300 dark:hover:bg-slate-800",
                                    isCurrent(link.path) ? "bg-slate-100 dark:bg-gray-900" : ""
                                  )}
                                >
                                  {t(link.title)}
                                </a>
                              ) : (
                                <Link
                                  to={link.path}
                                  role="menuitem"
                                  className={clsx(
                                    "block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-300 dark:hover:bg-slate-800",
                                    isCurrent(link.path) ? "bg-slate-100 dark:bg-gray-900" : ""
                                  )}
                                >
                                  {t(link.title)}
                                </Link>
                              )}
                            </>
                          ) : (
                            <>
                              {link.items?.map((subItem, idxSubItem) => {
                                return (
                                  <Fragment key={t(subItem.title)}>
                                    {subItem.path?.startsWith("https:") ? (
                                      <a
                                        href={subItem.path ?? ""}
                                        role="menuitem"
                                        className={clsx(
                                          "block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-300 dark:hover:bg-slate-800",
                                          isCurrent(subItem.path ?? "") ? "bg-slate-100 dark:bg-gray-900" : ""
                                        )}
                                      >
                                        {t(subItem.title)}
                                      </a>
                                    ) : (
                                      <Link
                                        to={subItem.path ?? ""}
                                        role="menuitem"
                                        className={clsx(
                                          "block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-300 dark:hover:bg-slate-800",
                                          isCurrent(subItem.path ?? "") ? "bg-slate-100 dark:bg-gray-900" : ""
                                        )}
                                      >
                                        {t(subItem.title)}
                                      </Link>
                                    )}
                                  </Fragment>
                                );
                              })}
                            </>
                          )}
                        </Fragment>
                      );
                    })}
                  </div>
                  <div role="none" className="flex items-center space-x-2">
                    {item.withSignInAndSignUp && (
                      <>
                        <Link
                          to="/register"
                          className="block w-full bg-slate-50 px-5 py-3 text-center font-medium text-gray-900 dark:bg-slate-800 dark:text-slate-300"
                          role="menuitem"
                        >
                          <div>{t("shared.signUp")}</div>
                        </Link>
                        <Link
                          to="/login"
                          className="block w-full bg-slate-50 px-5 py-3 text-center font-medium text-gray-900 dark:bg-slate-800 dark:text-slate-300"
                          role="menuitem"
                        >
                          <div>{t("shared.signIn")}</div>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
}
