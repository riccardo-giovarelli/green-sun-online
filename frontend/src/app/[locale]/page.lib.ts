import { API_BASE_URL } from "@/lib/api/api.lib";

/**
 * Fetches localized home page data from the backend.
 * * @param {string} locale - The target language code.
 * @returns {Promise<any | null>} The parsed JSON data from the API, or null if the request fails.
 */
export async function getHomeData(locale: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/home?locale=${locale}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("[HOME] BE responded with an error:", res.status);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("[HOME] Unable to connect to BE:", error);
    return null;
  }
}
