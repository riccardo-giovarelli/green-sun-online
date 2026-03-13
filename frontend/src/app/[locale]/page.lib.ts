export async function getHomeData(locale: string) {
  try {
    const url = `http://127.0.0.1:1337/api/home?locale=${locale}`;

    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Strapi ha risposto con un errore:", res.status);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Impossibile connettersi a Strapi:", error);
    return null;
  }
}
