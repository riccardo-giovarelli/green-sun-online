import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

// Centralized i18n routing settings
export const routing = defineRouting({
  locales: ["en", "it"],
  defaultLocale: "en",
  localePrefix: "never",
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
