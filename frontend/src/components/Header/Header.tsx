import { Link } from "@/i18n/routing";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Brand Name */}
        <Link href="/" className="text-xl font-bold tracking-tight text-green-700">
          Green Sun
        </Link>

        {/* Central Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link href="/paintings" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
            Gallery
          </Link>
        </nav>

        {/* Right Actions (Locale Switcher) */}
        <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
          <Link href="/" locale="it" className="hover:text-black transition-colors">
            IT
          </Link>
          <span>|</span>
          <Link href="/" locale="en" className="hover:text-black transition-colors">
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}
