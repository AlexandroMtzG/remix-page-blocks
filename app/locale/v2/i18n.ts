import type { InitOptions } from "i18next";

export const i18nConfig = {
  // Supported languages.
  supportedLngs: ["en", "es"],
  // Fallback language.
  fallbackLng: "en",
  // Default namespace.
  defaultNS: "translations",
  // Disable suspense mode. (Recommended).
  react: {
    useSuspense: false,
  },
} satisfies InitOptions;
