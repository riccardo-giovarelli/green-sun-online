import { getGalleryData } from "./page.lib";

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const strapiResponse = await getGalleryData(locale);
  const galleryData = strapiResponse?.data;

  return (
    <div className="container mx-auto px-4 pt-32 pb-24 min-h-screen flex flex-col">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-widest text-gray-900">
        {galleryData?.title || "Gallery"}
      </h1>

      {/* Spazio vuoto pronto per accogliere la griglia dei quadri */}
      <div className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 p-12">
        <p className="text-gray-400 font-medium">Here the content</p>
      </div>
    </div>
  );
}
