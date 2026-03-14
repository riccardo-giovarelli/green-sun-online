import { getHomeData } from "./page.lib";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const strapiResponse = await getHomeData(locale);

  if (!strapiResponse || !strapiResponse.data) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-24">
        <h1 className="text-2xl text-red-500">Dati non trovati per la lingua: {locale}</h1>
        <p>Assicurati che Strapi sia acceso e i permessi siano impostati su Public.</p>
      </div>
    );
  }

  const homeData = strapiResponse.data;

  return (
    <div className="flex h-full flex-col items-center justify-center p-24 text-center">
      <h1 className="text-5xl font-bold mb-8">{homeData.title || "Nessun titolo inserito in Strapi"}</h1>

      <div className="p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
        Stai visualizzando la versione: <span className="font-bold uppercase">{locale}</span>
      </div>
    </div>
  );
}
