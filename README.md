# Remix Page Blocks

Ready-to-use Remix + Tailwind CSS **routes** and **UI** components + a block editor.

![Remix Page Blocks](https://yahooder.sirv.com/remixblocks/page-blocks/cover.png)

## Demo

[https://remix-page-blocks.vercel.app/](https://remix-page-blocks.vercel.app/)

## Video Demo

https://www.loom.com/share/eccf927d35cd4ad3b4a1d512257cea53

## How to use?

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

## Support

If you like this project, [star it](https://github.com/AlexandroMtzG/remix-page-blocks) ⭐ or [sponsor it](https://github.com/sponsors/AlexandroMtzG) for more 😊.

## More page blocks

Check out [SaasRock](http://saasrock.com/?ref=remix-page-blocks-readme) - The One-Man SaaS Framework, all of these blocks are from SaasRock.

## More open-source

Check out my other open-source projects:

- [RemixBlocks](https://github.com/AlexandroMtzG/remix-blocks)
- [SaasFrontends](https://saasfrontends.com/)
- [NetcoreSaas](https://netcoresaas.com/)

## Screenshots

### Landing Page

![Landing Page](https://yahooder.sirv.com/remixblocks/page-blocks/landing.png)

### Contact Page

![Contact Page](https://yahooder.sirv.com/remixblocks/page-blocks/contact.png)

### Newsletter Page

![Newsletter Page](https://yahooder.sirv.com/remixblocks/page-blocks/newsletter.png)

### Dark Mode

![Dark Mode](https://yahooder.sirv.com/remixblocks/page-blocks/dark-mode.png)

### Multi-Language

![Multi-Language](https://yahooder.sirv.com/remixblocks/page-blocks/multi-language.png)

### Multi-Theme

![Multi-Theme](https://yahooder.sirv.com/remixblocks/page-blocks/multi-theme.png)
