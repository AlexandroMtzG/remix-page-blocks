import { Link } from "@remix-run/react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { CommunityBlockDto } from "~/application/dtos/marketing/CommunityBlockDto";

export default function CommunitySimple({ item }: { item: CommunityBlockDto }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t(item.headline)}</h2>
            <p className="text-xl text-gray-500">{t(item.subheadline)}</p>
            {item.cta && (
              <div className="flex flex-col justify-center space-y-1 sm:flex-row sm:space-y-0 sm:space-x-2">
                {item.cta.map((item) => {
                  return (
                    <div key={item.href} className="rounded-md ">
                      {item.href.startsWith("http") ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className={clsx(
                            "group flex w-full items-center justify-center space-x-2 truncate rounded-md border px-8 py-3 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-900 md:py-2 md:px-4"
                          )}
                        >
                          {t(item.text)}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className={clsx(
                            "group flex w-full items-center justify-center space-x-2 truncate rounded-md border px-8 py-3 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-900 md:py-2 md:px-4"
                          )}
                        >
                          {t(item.text)}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {item.members && (
            <ul
              className={clsx(
                "mx-auto grid gap-x-3 gap-y-4 md:gap-x-3 lg:max-w-5xl lg:gap-x-4 lg:gap-y-4",
                item.members.length === 1 && "grid-cols-1",
                item.members.length === 2 && "grid-cols-2",
                item.members.length === 3 && "grid-cols-3",
                item.members.length === 4 && "grid-cols-4",
                item.members.length === 5 && "grid-cols-5",
                item.members.length === 6 && "grid-cols-6",
                item.members.length === 7 && "grid-cols-7",
                item.members.length >= 8 && "grid-cols-4 sm:grid-cols-4 xl:grid-cols-8"
              )}
            >
              {item.members.map((item) => (
                <li key={item.user}>
                  <div className="space-y-4">
                    <img className="mx-auto h-16 w-16 rounded-full lg:h-20 lg:w-20" src={item.avatar_url} alt={item.user} />
                    <div>
                      <div className="mt-2 text-xs font-medium lg:text-sm">
                        <h4 className="truncate text-gray-500">{item.user}</h4>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
