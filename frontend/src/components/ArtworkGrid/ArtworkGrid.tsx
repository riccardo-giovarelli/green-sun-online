"use client";

import useArtwork from "@/hooks/useArtworks/useArtworks";
import { API_BASE_URL } from "@/lib/api/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ArtworkGrid() {
  const { data: artworks, isLoading, isError } = useArtwork();
  const t = useTranslations();

  if (isLoading) {
    return (
      <div className="w-full py-20 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
      </div>
    );
  }

  if (isError || !artworks || artworks.length === 0) {
    return <div className="w-full py-20 text-center text-gray-500">{t("Artwork.noArtworkFound")}.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {artworks.map((artwork) => {
        const firstImage = artwork.images?.[0];
        const imageUrl = firstImage?.url ? `${API_BASE_URL}${firstImage.url}` : null;

        return (
          <div
            key={artwork.documentId}
            className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            {/* Image */}
            <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={firstImage?.alternativeText || artwork.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {t("Artwork.noImage")}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{artwork.title}</h3>

              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
                {artwork.medium}
                {artwork.dimensions && ` • ${artwork.dimensions}`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
