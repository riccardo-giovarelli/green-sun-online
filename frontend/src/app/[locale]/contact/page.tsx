import { getTranslations } from "next-intl/server";
// import { getContactData } from "./page.lib";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  /* 
  const strapiResponse = await getContactData(locale);
  const contactData = strapiResponse?.data;
  */

  return (
    <div className="container mx-auto px-4 pt-32 pb-24 min-h-screen flex flex-col">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-widest text-gray-900">
        {t("contact")}
      </h1>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 p-12">
        <p className="text-gray-400 font-medium">Contact content</p>
      </div>
    </div>
  );
}
