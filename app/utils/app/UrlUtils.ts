import { Params } from "react-router";

const stripTrailingSlash = (str: string) => {
  return str.endsWith("/") ? str.slice(0, -1) : str;
};

const currentTenantUrl = (params: Params, path?: string) => {
  const { tenant } = params;
  if (path) {
    const appPath = path.startsWith("/") ? path.substring(1, path.length - 1) : path;
    // console.log({ appPath });
    return `/app/${tenant}/${appPath}`;
  }
  return `/app/${tenant}/`;
};

const currentEntityUrl = (params: Params) => {
  const currentTenant = stripTrailingSlash(currentTenantUrl(params));
  return `${currentTenant}/${params.entity}`;
};

const replaceVariables = (params: Params, path?: string) => {
  return path?.replace(":tenant", params.tenant ?? "");
};

const slugify = (str: string, max: number = 100) => {
  let value = str
    .toLowerCase()
    .trim()
    .replace("/", "-")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (max > 0) {
    value = value.padEnd(100, "").substring(0, 100);
  }
  return value.trim();
};

function getParentRoute(pathname: string) {
  const url = stripTrailingSlash(pathname);
  const parentRoute = url.substring(0, url.lastIndexOf("/"));
  return parentRoute;
}

export default {
  currentTenantUrl,
  currentEntityUrl,
  stripTrailingSlash,
  slugify,
  replaceVariables,
  getParentRoute,
};
