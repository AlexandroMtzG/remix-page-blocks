import { useTranslation } from "react-i18next";
import { TestimonialDto } from "~/application/dtos/marketing/TestimonialDto";
import { TestimonialsBlockDto } from "~/application/dtos/marketing/TestimonialsBlockDto";

export default function TestimonialsSimple({ item }: { item: TestimonialsBlockDto }) {
  const { t } = useTranslation();
  return (
    <div className="relative space-y-10 pt-3">
      <div className="flex justify-center">
        <div className="space-y-3 text-center">
          {item.headline && <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-4xl">{t(item.headline)}</h3>}
          {item.subheadline && <p className="text-xl text-gray-600 dark:text-gray-400 md:text-2xl">{t(item.subheadline)}</p>}
        </div>
      </div>
      <div className="flex w-full justify-center space-x-8 overflow-x-scroll">
        {item.testimonials.map((testimonial, idx) => {
          return <Testimonial key={idx} item={testimonial} />;
        })}
      </div>
    </div>
  );
}

function Testimonial({ item }: { item: TestimonialDto }) {
  const { t } = useTranslation();
  return (
    <section className="flex-shrink-0 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="p-12">
            <a href={item.companyUrl} target="_blank" rel="noreferrer">
              <img className="mx-auto hidden h-6 w-auto dark:block" src={item.logoDarkMode} alt={item.company} />
              <img className="mx-auto h-6 w-auto dark:hidden" src={item.logoLightMode} alt={item.company} />
            </a>
            <blockquote className="mt-10">
              <div className="mx-auto max-w-3xl text-center text-2xl leading-9 text-gray-900 dark:text-white">
                <p>&ldquo;{t(item.quote)}&rdquo;</p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img className="mx-auto h-10 w-10 rounded-full" src={item.avatar} alt={item.name} />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900 dark:text-white">
                      {item.personalWebsite ? (
                        <a href={item.personalWebsite} className="border-b border-dashed border-theme-300 hover:border-dotted" target="_blank" rel="noreferrer">
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </div>

                    <svg className="mx-1 hidden h-5 w-5 text-theme-600 md:block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-gray-500">
                      {item.role},{" "}
                      <a href={item.companyUrl} className="border-b border-dashed border-theme-300 hover:border-dotted" target="_blank" rel="noreferrer">
                        {item.company}
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
