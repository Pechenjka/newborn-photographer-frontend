export const normalizeCanonicalPath = (url: string): string => {
  try {
    const parsedUrl = new URL(url);

    // Homepage
    if (parsedUrl.pathname === "/") {
      return parsedUrl.origin + "/";
    }

    // Remove existing trailing slashes
    const cleanPath = parsedUrl.pathname.replace(/\/+$/, "");

    return `${parsedUrl.origin}${cleanPath}/`;
  } catch {
    return url;
  }
};
