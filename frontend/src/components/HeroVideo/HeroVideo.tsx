import { useTranslations } from "next-intl";

export default function HeroVideo() {
  const t = useTranslations("Home");

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/home/hero-poster.png" // Scommenta quando avrai un'immagine di anteprima
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/videos/home/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-widest uppercase mb-4 drop-shadow-lg">
          {t("welcome")}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl font-light drop-shadow-md">{t("subtitle")}</p>
      </div>
    </section>
  );
}
