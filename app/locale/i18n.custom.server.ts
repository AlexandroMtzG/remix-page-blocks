import { Backend } from "remix-i18next";

export class FetchBackend implements Backend {
  private url: URL;

  constructor(url: string) {
    this.url = new URL(url);
  }

  async getTranslations(namespace: string, locale: string) {
    let url = new URL(`${locale}/${namespace}.json`, this.url);
    let response = await fetch(url.toString(), {
      headers: { accept: "application/json" },
    });
    return response.json();
  }
}
