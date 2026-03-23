import { API_BASE_URL } from "../../lib/api/constants";
import { Artwork } from "./useArtwork.type";

export async function getArtworks(locale: string): Promise<Artwork[]> {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/artworks?locale=${locale}&populate=*`,
      { cache: "no-store" }, // Per ora la cache è disabilitata
    );

    if (!res.ok) {
      console.error("[ARTWORKS] Errore dal backend:", res.status);
      return [];
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("[ARTWORKS] Impossibile connettersi al backend:", error);
    return [];
  }
}
