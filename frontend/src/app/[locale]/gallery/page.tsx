import ArtworkGrid from "@/components/ArtworkGrid/ArtworkGrid";
import { getTranslations } from "next-intl/server";

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return (
    <div className="container mx-auto px-4 pt-32 pb-24 min-h-screen flex flex-col">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-widest text-gray-900">
        {t("gallery")}
      </h1>

      {/* Content */}
      <div className="w-full">
        <ArtworkGrid />
      </div>
    </div>
  );
}
