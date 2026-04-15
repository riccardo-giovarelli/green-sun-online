import ArtworkGrid from "@/components/ArtworkGrid/ArtworkGrid";
import { getTranslations } from "next-intl/server";

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return (
    <div className="container mx-auto px-4 pt-36 pb-24 min-h-screen flex flex-col">
      <div className="w-full">
        <ArtworkGrid />
      </div>
    </div>
  );
}
