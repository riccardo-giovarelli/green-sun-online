/**
 * Determines the Header's Tailwind classes based on the current route.
 * @param {string} pathname - The current page path.
 * @returns {string} The computed CSS classes for the header container.
 */
export const getHeaderClasses = (pathname: string): string =>
  pathname === "/"
    ? "bg-transparent text-white border-white hover:bg-white hover:text-black hover:border-transparent hover:shadow-md"
    : "bg-white text-black border-gray-200 hover:border-transparent hover:shadow-md";

/**
 * Determines navigation link classes, applying active state styling if the path matches.
 * @param {string} href - The target URL of the link.
 * @param {string} pathname - The current page path.
 * @returns {string} The computed CSS classes for the link element.
 */
export const getLinkClasses = (href: string, pathname: string): string =>
  `text-sm font-medium uppercase tracking-wide opacity-90 hover:opacity-100 hover:text-gray-400 transition-all pb-1 border-b ${
    pathname === href ? "border-current" : "border-transparent hover:border-current"
  }`;
