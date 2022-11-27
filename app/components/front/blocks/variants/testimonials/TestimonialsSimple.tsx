import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { TestimonialsBlockDto } from "~/application/dtos/marketing/TestimonialsBlockDto";

export default function TestimonialsSimple({ item }: { item: TestimonialsBlockDto }) {
  const { t } = useTranslation();
  return (
    <section className="text-gray-600 dark:text-gray-400">
      <div className="container mx-auto space-y-12 px-5 py-24">
        {(item.headline || item.subheadline) && (
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{t(item.headline)}</h2>
            <p className="text-center text-xl text-gray-500">{t(item.subheadline)}</p>
          </div>
        )}
        <div className="m-4 flex flex-wrap">
          {item.items.map((testimonial, idx) => {
            return (
              <div
                key={idx}
                className={clsx(
                  "w-full p-4",
                  item.items.length === 1 && "mx-auto max-w-xl md:w-full",
                  item.items.length === 2 && "md:w-1/2",
                  item.items.length === 3 && "md:w-1/3",
                  item.items.length > 3 && "md:w-1/2"
                )}
              >
                <div className="h-full rounded bg-gray-100 p-8 dark:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mb-4 block h-5 w-5 text-gray-400" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="inline-flex items-center">
                    <img alt="testimonial" src={testimonial.avatar} className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center" />
                    <span className="flex flex-grow flex-col pl-4">
                      <a
                        href={testimonial.personalWebsite}
                        target="_blank"
                        rel="noreferrer"
                        className="title-font font-medium text-gray-900 hover:underline dark:text-white"
                      >
                        {testimonial.name}
                      </a>
                      <span className="flex items-center space-x-1 text-sm text-gray-500">
                        <div>{t(testimonial.role)}</div>
                        {testimonial.company && (
                          <>
                            <div>@</div>
                            <div className="text-sm text-gray-500">
                              {testimonial.companyUrl ? (
                                <a href={testimonial.companyUrl} target="_blank" rel="noreferrer" className="hover:underline">
                                  {testimonial.company}
                                </a>
                              ) : (
                                testimonial.company
                              )}
                            </div>
                          </>
                        )}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
