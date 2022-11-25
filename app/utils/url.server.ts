export const baseURL = (() => {
  if (process.env.SERVER_URL) {
    return process.env.SERVER_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  throw new Error("SERVER_URL or VERCEL_URL environment variable must be set.");
})();
