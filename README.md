# Remix Page Blocks

Remix and Tailwind CSS simple page block editor.

## Latest Updates

- ⭐ Remix v2 + React v18
- ⭐ Dockerfile: [Demo](https://remix-page-blocks.fly.dev/) is now hosted on [Fly.io](https://fly.io/)
- ❌ [Vercel demo](https://remix-page-blocks.vercel.app/): Translations take a second to load. I still don't know how to implement `i18n-fetch-backend` with Vercel.

## Demo

- [Landing](https://remix-page-blocks.fly.dev/)
- [Contact](https://remix-page-blocks.fly.dev/contact)
- [Newsletter](https://remix-page-blocks.fly.dev/newsletter)
- [Privacy Policy](https://remix-page-blocks.fly.dev/privacy-policy)
- [Terms and Conditions](https://remix-page-blocks.fly.dev/terms-and-conditions)
- [Components](https://remix-page-blocks.fly.dev/components)

## Video Demo

https://www.loom.com/share/eccf927d35cd4ad3b4a1d512257cea53

## Getting Started

💿 Rename `.env.example` to `.env` and set your variables.

💿 Install all the dependencies.

```
npm install
```

💿 Run the app.

```
npm run dev
```

## Deploy to Fly.io

💿 Set the app `name` and `primary region` at fly.toml.

```
app = "YOUR_APP_NAME"
...
primary_region = "iad"
```

The primary region should match your database (e.g. Supabase) region.

💿 Create the app using `fly` CLI:

```
fly apps create YOUR_APP_NAME
```

💿 Set your secrets:

You can see the examples at `.env.fly.example`.

```
flyctl secrets set \
SERVER_URL=https://YOUR_APP_NAME.fly.dev \
SESSION_SECRET=abc123 \
APP_NAME="Remix Page Blocks" \
CONVERTKIT_APIKEY=abc123 \
CONVERTKIT_FORM=abc123 \
GITHUB_TOKEN=abc123 \
CONTACT_FORMSPREE=abc123 \
--app YOUR_APP_NAME
```

💿 Deploy the app:

```
fly deploy --remote-only
```

💿 (Optional) Scale

```
fly scale vm shared-cpu-2x --app YOUR_APP_NAME
```

## Blocks

Pages are built using blocks.

```tsx
...
export function defaultLandingPage({ t }: { t: TFunction }) {
  const blocks: PageBlockDto[] = [
    // Banner
    {
      banner: {
        style: "top",
        text: "Upgraded to Remix v2 + React 18 ✨"
        cta: [{ text: "Meet saasrock", href: "https://saasrock.com/?ref=remix-page-blocks-banner-v2", target: "_blank" }],
      },
    },
    // Header
    {
      header: {
        style: "simple",
        withLogo: true,
        withSignInAndSignUp: false,
        withThemeSwitcher: true,
        withLanguageSwitcher: true,
        links: [
          { path: "/", title: t("blocks.header.product") },
          { path: "/contact", title: t("blocks.header.contact") },
          { path: "/newsletter", title: t("blocks.header.newsletter") },
        ],
      },
    },
    // Hero
    {
      hero: {
        style: "simple",
        headline: "Remix Page Blocks",
        subheadline: "A collection of functional blocks: Header, Footer, Hero, Banner, Features, Logo Clouds, Community, Embeded Video, Testimonials, FAQ, Contact, Newsletter, and more.",
        image: "https://via.placeholder.com/720x600?text=Your%20Hero%20Image",
        cta: [
          {
            text: "View on GitHub"",
            href: "https://github.com/AlexandroMtzG/remix-page-blocks",
            isPrimary: true,
          },
          {
            text: "Built by SaasRock"",
            href: "https://saasrock.com/?ref=remix-page-blocks-hero",
            isPrimary: false,
            target: "_blank",
          },
        ],
        topText: {
          text: "Remix 2.3.1 ✨ Tailwind CSS 3.3.5 💅 DaisyUI 2.42.1",
        },
      },
    },
    // Logo Clouds
    // Gallery
    // Video
    // Community
    // Testimonials
    // Features
    // Newsletter
    // Faq
    // Footer
    ...
  ];
  return blocks;
}
```

**Result:**

![Landing Page](https://private-user-images.githubusercontent.com/8606530/287595160-ed1020f1-c434-4326-bf18-87b9088f041b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2NjYzMzcsIm5iZiI6MTcwMTY2NjAzNywicGF0aCI6Ii84NjA2NTMwLzI4NzU5NTE2MC1lZDEwMjBmMS1jNDM0LTQzMjYtYmYxOC04N2I5MDg4ZjA0MWIucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMTIwNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzEyMDRUMDUwMDM3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NjBiMzJmYTk5ZDUzYzZjYjBhMjVkOGEzOGM3MDA1MDEyZTZjYzk0Y2I1YzdkYzFmNTFmZGFlOGIyYWEwOTQ0ZiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.bbQXVuqXKSxDzghd_raYOoSthLMpqARiFIHzrqezKvM)
