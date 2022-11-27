# Remix Page Blocks

Remix and Tailwind CSS simple page block editor.

![Remix Page Blocks](https://yahooder.sirv.com/remixblocks/page-blocks/cover.png)

## Demo

- [Landing](https://remix-page-blocks.vercel.app/)
- [Contact](https://remix-page-blocks.vercel.app/contact)
- [Newsletter](https://remix-page-blocks.vercel.app/newsletter)
- [Privacy Policy](https://remix-page-blocks.vercel.app/privacy-policy)
- [Terms and Conditions](https://remix-page-blocks.vercel.app/terms-and-conditions)
- [Components](https://remix-page-blocks.vercel.app/components)

## Video Demo

https://www.loom.com/share/eccf927d35cd4ad3b4a1d512257cea53

## How to use?

💿 Rename `.env.example` to `.env` and set your variables.

💿 Install all the dependencies.

```
npm install
```

💿 Run the app.

```
npm run dev
```

💿 Play with the Landing Page Blocks `app/utils/services/pages/defaultLandingPage.ts`:

```tsx
export function defaultLandingPage({ t }: { t: TFunction }) {
  const blocks: PageBlockDto[] = [
    // Header
    {
      header: ...
    },
    {
      hero: {
        style: "simple",
        headline: "Remix Page Blocks",
        subheadline: "A collection of functional blocks: Header, Footer, Hero, Banner, Features, Logo Clouds, Community, Embeded Video, Testimonials, FAQ, Contact, Newsletter, and more.",
      }
    }
    ...
```

## Screenshots

### Landing Page

![Landing Page](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/hero-light.png)

### Contact Page

![Contact Page](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/contact.png)

### Newsletter Page

![Newsletter Page](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/newsletter.png)

### Dark Mode

![Dark Mode](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/hero-dark.png)

### Multi-Language

![Multi-Language](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/multi-language.png)

### Multi-Theme

![Multi-Theme](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/multi-theme.png)

### Block Editor

![Block Editor](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/block-editor.png)

### Components

![Components](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/components.png)

## Blocks

### Header

![Header](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/blocks/block-header.png)

### Hero - Simple

![Hero - Simple](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/blocks/block-hero-simple.png)

### Hero - With Image

![Hero - with Image](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/blocks/block-hero-with-image.png)

### Testimonials - Simple

![Testimonials - Simple](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/blocks/block-testimonial-simple.png)

### Features - List

![Features - List](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/blocks/block-features-list.png)

### Features - Cards

![Features - Cards](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/blocks/block-features-cards.png)

### Newsletter - Simple

![Newsletter - Simple](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/blocks/block-newsletter.png)

### Newsletter - with Rigth Form

![Newsletter - with Rigth Form](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/blocks/block-newsletter-form.png)

### FAQ

![FAQ](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/blocks/block-faq.png)

### Footer

![Footer](https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/blocks/block-footer.png)
