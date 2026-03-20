"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { getHeaderClasses, getLinkClasses } from "./Header.lib";

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <header
      className={`group fixed top-0 z-50 w-full transition-all duration-500 border-b ${getHeaderClasses(pathname)}`}
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-4 gap-4">
        {/* Row 1 */}
        <div className="w-full flex justify-center">
          <Link href="/" className="text-3xl font-bold tracking-widest uppercase transition-colors">
            {t("Common.siteName")}
          </Link>
        </div>

        {/* Row 2 */}
        <div className="w-full flex justify-center items-center relative">
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className={getLinkClasses("/", pathname)}>
              {t("Home.home")}
            </Link>
            <Link href="/gallery" className={getLinkClasses("/gallery", pathname)}>
              {t("Home.gallery")}
            </Link>
            <Link href="/contact" className={getLinkClasses("/contact", pathname)}>
              {t("Home.contact")}
            </Link>
          </nav>

          {/* Language selector */}
          <div className="absolute right-0 flex items-center gap-3 text-xs font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
            <Link href="/" locale="it" className="hover:text-gray-400 transition-colors">
              IT
            </Link>
            <span>|</span>
            <Link href="/" locale="en" className="hover:text-gray-400 transition-colors">
              EN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
