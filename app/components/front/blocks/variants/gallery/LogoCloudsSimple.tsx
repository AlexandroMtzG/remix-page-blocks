import { LogoCloudDto } from "~/application/dtos/marketing/LogoCloudsBlockDto";

export default function LogoCloudsSimple({ items }: { items: LogoCloudDto[] }) {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center space-x-8">
          {items.map((item, idx) => {
            return (
              <div key={idx} className="flex justify-center">
                <a href={item.href} target="_blank" rel="noreferrer">
                  {!item.srcDark ? (
                    <img className="h-12" src={item.src} alt={item.alt} />
                  ) : (
                    <>
                      <img className="h-12 dark:hidden" src={item.src} alt={item.alt} />
                      <img className="hidden h-12 dark:block" src={item.srcDark} alt={item.alt} />
                    </>
                  )}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
