import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { getArtworks } from "./useArtwork.lib";
import { Artwork } from "./useArtwork.type";

export default function useArtwork() {
  const locale = useLocale();
  return useQuery<Artwork[]>({
    queryKey: ["artworks", locale],
    queryFn: () => getArtworks(locale),
  });
}
