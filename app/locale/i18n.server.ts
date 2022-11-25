import { FetchBackend, RemixI18Next } from "remix-i18next";
import { baseURL } from "~/utils/url.server";
// You will need to provide a backend to load your translations, here we use the
// file system one and tell it where to find the translations.
let backend = new FetchBackend({
  baseUrl: new URL(baseURL),
  pathPattern: "/locales/:locale/:namespace.json",
});

export let i18n = new RemixI18Next(backend, {
  fallbackLng: "en", // here configure your default (fallback) language
  supportedLanguages: ["es", "en"], // here configure your supported languages
});
