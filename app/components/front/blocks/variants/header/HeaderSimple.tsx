import { Link, useLocation } from "@remix-run/react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { HeaderBlockDto } from "~/application/dtos/marketing/HeaderBlockDto";
import { Navbar, Dropdown, Button, Menu } from "react-daisyui";
import Logo from "~/components/front/Logo";
import Icon from "~/components/front/Icon";
import LocaleSelector from "~/components/toggles/LocaleSelector";
import DarkModeToggle from "~/components/toggles/DarkModeToggle";
import clsx from "clsx";
export default function HeaderSimple({ item }: { item: HeaderBlockDto }) {
  const { t } = useTranslation();
  const location = useLocation();

  function isCurrent(path: string): boolean {
    return location.pathname === path;
  }
  return (
    <nav className="component-preview flex w-full items-center justify-center gap-2 p-4 font-sans">
      <Navbar>
        <Navbar.Start>
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </Button>
            <Dropdown.Menu
              tabIndex={0}
              className="menu-compact z-10 mt-3 w-52 rounded-lg border border-gray-200 bg-base-100 p-2 dark:border-gray-700 dark:bg-gray-900"
            >
              {item.links.map((item, idx) => {
                return (
                  <Fragment key={idx}>
                    {!item.items || item.items.length === 0 ? (
                      <Dropdown.Item
                        href={item.path}
                        target={item.target}
                        className={clsx(
                          "overflow-hidden rounded-md text-base font-medium leading-6 transition duration-150 ease-in-out focus:outline-none",
                          !isCurrent(item.path ?? "") && "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",
                          isCurrent(item.path ?? "") && "text-gray-900 dark:text-white"
                        )}
                      >
                        {t(item.title)}
                      </Dropdown.Item>
                    ) : (
                      <li tabIndex={0}>
                        <div className="justify-between text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                          {t(item.title)}
                          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                          </svg>
                        </div>
                        <ul className="z-10 rounded-lg border border-gray-200 bg-base-100 p-2 dark:border-gray-700 dark:bg-gray-900">
                          {item.items.map((item, idx) => {
                            return (
                              <li key={idx}>
                                {item.path?.startsWith("http") ? (
                                  <a href={item.path} target={item.target}>
                                    {t(item.title)}
                                  </a>
                                ) : (
                                  <Link to={item.path ?? ""}>{t(item.title)}</Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    )}
                  </Fragment>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <div className="btn-ghost btn text-xl normal-case">
            {item.withLogo ? (
              <>
                <Logo className="hidden md:block" size="h-9" />
                <Icon className="md:hidden" size="h-9" />
              </>
            ) : (
              <div></div>
            )}
          </div>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
          <Menu horizontal className="flex items-center p-0">
            {item.links.map((item, idx) => {
              return (
                <Fragment key={idx}>
                  {!item.items || item.items.length === 0 ? (
                    <Menu.Item
                      className={clsx(
                        "overflow-hidden rounded-md text-base font-medium leading-6 transition duration-150 ease-in-out focus:outline-none",
                        !isCurrent(item.path ?? "") && "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",
                        isCurrent(item.path ?? "") && "text-gray-900 dark:text-white"
                      )}
                    >
                      {item.path?.startsWith("http") ? (
                        <a href={item.path} target={item.target}>
                          {t(item.title)}
                        </a>
                      ) : (
                        <Link to={item.path ?? ""}>{t(item.title)}</Link>
                      )}
                    </Menu.Item>
                  ) : (
                    <Menu.Item tabIndex={0}>
                      <div
                        className={clsx(
                          "overflow-hidden rounded-md text-base font-medium leading-6 transition duration-150 ease-in-out focus:outline-none",
                          !isCurrent(item.path ?? "") && "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",
                          isCurrent(item.path ?? "") && "text-gray-900 dark:text-white"
                        )}
                      >
                        {t(item.title)}
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      </div>
                      <Menu className="z-10 rounded-lg border border-gray-200 bg-base-100 p-2 dark:border-gray-700 dark:bg-gray-900">
                        {item.items.map((subItem, idx) => {
                          return (
                            <Menu.Item
                              key={idx}
                              className={clsx(
                                "overflow-hidden rounded-md text-base font-medium leading-6 transition duration-150 ease-in-out focus:outline-none",
                                !isCurrent(item.path ?? "") && "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",
                                isCurrent(item.path ?? "") && "text-gray-900 dark:text-white"
                              )}
                            >
                              {subItem.path?.startsWith("http") ? (
                                <a href={subItem.path} target={subItem.target}>
                                  {t(subItem.title)}
                                </a>
                              ) : (
                                <Link to={item.path ?? ""}>{subItem.title}</Link>
                              )}
                            </Menu.Item>
                          );
                        })}
                      </Menu>
                    </Menu.Item>
                  )}
                </Fragment>
              );
            })}
            <div className="ml-2 flex items-center space-x-3">
              {item.withLanguageSwitcher && <LocaleSelector className="hidden lg:block" />}
              {item.withThemeSwitcher && (
                <div>
                  <DarkModeToggle className="hidden lg:flex" />
                </div>
              )}
            </div>
          </Menu>
        </Navbar.Center>
        <Navbar.End className="flex space-x-2">
          {item.withSignInAndSignUp && (
            <>
              <Button className="btn-secondary btn">
                <div>{t("shared.signUp")}</div>
              </Button>
              <Button className="btn-primary btn">
                <div>{t("shared.signIn")}</div>
              </Button>
            </>
          )}
        </Navbar.End>
      </Navbar>
    </nav>
  );
}
