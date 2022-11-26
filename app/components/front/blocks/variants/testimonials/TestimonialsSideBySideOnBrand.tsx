import clsx from "clsx";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { TestimonialsBlockDto } from "~/application/dtos/marketing/TestimonialsBlockDto";

export default function TestimonialsSideBySideOnBrand({ item }: { item: TestimonialsBlockDto }) {
  const { t } = useTranslation();
  return (
    <section className="bg-theme-800">
      <div
        className={clsx(
          "flex w-full flex-col overflow-x-scroll px-16 md:flex-row md:space-x-8",
          item.testimonials.length === 1 ? "justify-center" : "justify-start"
        )}
      >
        {item.testimonials.map((testimonial, idx) => {
          return (
            <Fragment key={idx}>
              <div
                className={clsx(
                  "flex-shrink-0",
                  "py-12 px-4 sm:px-6 md:flex md:flex-col md:border-theme-900 md:py-16 md:pl-0",
                  idx < item.testimonials.length - 1 && "md:border-r md:pr-10 lg:pr-16",
                  item.testimonials.length === 1 && "w-full",
                  item.testimonials.length === 2 && "md:w-1/2",
                  item.testimonials.length === 3 && "md:w-1/3"
                )}
              >
                <div className="md:flex-shrink-0">
                  <a href={testimonial.companyUrl} target="_blank" rel="noreferrer">
                    <img className="h-8" src={testimonial.logoDarkMode} alt={testimonial.company} />
                  </a>
                </div>
                <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-theme-600"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">{t(testimonial.quote)}</p>
                  </div>
                  <footer className="mt-8">
                    <div className="flex items-start">
                      {testimonial.avatar && (
                        <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                          <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                        </div>
                      )}
                      <div className="ml-4">
                        <div className="text-base font-medium text-white">{testimonial.name}</div>
                        <div className="text-base font-medium text-theme-200">
                          {testimonial.role},{" "}
                          <a
                            href={testimonial.companyUrl}
                            className="border-b border-dashed border-theme-300 hover:border-dotted"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {testimonial.company}
                          </a>
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
