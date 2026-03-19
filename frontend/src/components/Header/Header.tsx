import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();

  return (
    <header className="group fixed top-0 z-50 w-full transition-all duration-500 bg-transparent text-white hover:bg-white hover:text-black hover:shadow-md">
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
            <Link
              href="/"
              className="text-sm font-medium uppercase tracking-wide opacity-90 hover:opacity-100 hover:text-green-600 transition-all"
            >
              {t("Home.home")}
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium uppercase tracking-wide opacity-90 hover:opacity-100 hover:text-green-600 transition-all"
            >
              {t("Home.gallery")}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium uppercase tracking-wide opacity-90 hover:opacity-100 hover:text-green-600 transition-all"
            >
              {t("Home.contact")}
            </Link>
          </nav>
          {/* Language selector */}
          <div className="absolute right-0 flex items-center gap-3 text-xs font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
            <Link href="/" locale="it" className="hover:text-green-600 transition-colors">
              IT
            </Link>
            <span>|</span>
            <Link href="/" locale="en" className="hover:text-green-600 transition-colors">
              EN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
