import { Disclosure } from "@headlessui/react";
import { Link } from "@remix-run/react";
import clsx from "clsx";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { FaqBlockDto } from "~/application/dtos/marketing/FaqBlockDto";
import ChevronDownIcon from "~/components/ui/icons/ChevronDownIcon";

export default function FaqSimple({ item }: { item: FaqBlockDto }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200 dark:divide-gray-700">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200 dark:divide-gray-700">
            {item.items.map((item, idx) => (
              <Disclosure defaultOpen={idx === 0} as="div" key={item.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900 dark:text-white">{t(item.question)}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon className={clsx(open ? "-rotate-180" : "rotate-0", "h-6 w-6 transform")} aria-hidden="true" />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 space-y-1 pr-12">
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        {t(item.answer)}{" "}
                        {item.link && (
                          <Fragment>
                            {item.link.href.startsWith("http") ? (
                              <a href={item.link.href} className="underline" target={item.link.target}>
                                {t(item.link.text)}
                              </a>
                            ) : (
                              <Link className="underline" to={item.link.href}>
                                {t(item.link.text)}
                              </Link>
                            )}
                          </Fragment>
                        )}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
