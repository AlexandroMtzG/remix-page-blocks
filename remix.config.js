import { createRoutesFromFolders } from "@remix-run/v1-route-convention";

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
export default {
  tailwind: true,
  postcss: true,
  ignoredRouteFiles: ["**/.*"],
  // routes: async (defineRoutes) => {
  //   return flatRoutes("routes", defineRoutes);
  // },
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes);
  },
  serverDependenciesToBundle: ["remix-i18next"],
  watchPaths: ["./tailwind.config.ts"],
  cacheDirectory: "./node_modules/.cache/remix",
  browserNodeBuiltinsPolyfill: {
    modules: { crypto: true },
  },
  mdx: async (filename) => {
    const [rehypeHighlight] = await Promise.all([import("rehype-highlight").then((mod) => mod.default)]);
    return {
      rehypePlugins: [rehypeHighlight],
    };
  },
};
