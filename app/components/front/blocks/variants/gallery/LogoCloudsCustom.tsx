import LogoReact from "~/assets/logos/colors/react.png";
import LogoTailwind from "~/assets/logos/colors/tailwindcss.png";
import LogoPrisma from "~/assets/logos/colors/prisma.png";
import LogoPrismaDark from "~/assets/logos/colors/prisma-dark.png";
import LogoStripe from "~/assets/logos/colors/stripe.png";
import LogoPostmark from "~/assets/logos/colors/postmark.png";
import LogoRemix from "~/assets/logos/colors/remix.png";
import LogoRemixDark from "~/assets/logos/colors/remix-dark.png";
import LogoTypescript from "~/assets/logos/colors/typescript.png";

export default function LogoCloudsCustom() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-7">
          <div className="order-none col-span-1 flex justify-center">
            <a href="https://tailwindcss.com/?ref=saasrock.com" target="_blank" rel="noreferrer">
              <img className="h-14 object-cover" src={LogoTailwind} alt="Tailwind CSS" />
            </a>
          </div>

          <div className="order-none col-span-1 flex justify-center">
            <a href="https://www.typescriptlang.org/?ref=saasrock.com" target="_blank" rel="noreferrer">
              <img className="h-14 object-cover" src={LogoTypescript} alt="TypeScript" />
            </a>
          </div>
          <div className="order-none col-span-1 flex justify-center">
            <a href="https://www.prisma.io/?ref=saasrock.com" target="_blank" rel="noreferrer">
              <img className="h-14 object-cover dark:hidden" src={LogoPrisma} alt="Remix" />
              <img className="hidden h-14 object-cover dark:block" src={LogoPrismaDark} alt="Remix" />
            </a>
          </div>
          <div className="order-first col-span-1 flex justify-center lg:order-none">
            <a href="https://remix.run/?ref=saasrock.com" target="_blank" rel="noreferrer">
              <img className="h-14 object-cover dark:hidden" src={LogoRemix} alt="Remix" />
              <img className="hidden h-14 object-cover dark:block" src={LogoRemixDark} alt="Remix" />
            </a>
          </div>
          <div className="order-none col-span-1 flex justify-center">
            <a href="https://reactjs.org/?ref=saasrock.com" target="_blank" rel="noreferrer">
              <img className="h-14 object-cover" src={LogoReact} alt="React" />
            </a>
          </div>
          <div className="order-none col-span-1 flex justify-center">
            <a href="https://stripe.com/?ref=saasrock.com" target="_blank" rel="noreferrer">
              <img className="h-14 object-cover" src={LogoStripe} alt="Stripe" />
            </a>
          </div>
          <div className="order-none col-span-1 hidden justify-center lg:flex">
            <a href="https://postmarkapp.com/" target="_blank" rel="noreferrer">
              <img className="h-14 object-cover" src={LogoPostmark} alt="Postmark" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
