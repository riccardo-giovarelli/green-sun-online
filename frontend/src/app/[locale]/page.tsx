import { getHomeData } from "./page.lib";
import HeroVideo from "@/components/HeroVideo/HeroVideo";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const strapiResponse = await getHomeData(locale);
  const homeData = strapiResponse?.data;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroVideo />
      <section className="container mx-auto py-24 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{homeData?.title || "Home"}</h2>
        <p className="text-gray-600">
          Scorrendo verso il basso, l&apos;Header rimarrà in alto e il video sparirà gradualmente.
        </p>
      </section>
    </div>
  );
}
