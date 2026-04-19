import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { routing } from "@/i18n/routing";
import QueryProvider from "@/providers/QueryProvider";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

// Configure custom fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure custom fonts
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define static SEO metadata
export const metadata: Metadata = {
  title: "Green Sun Online | Artist Showcase",
  description: "Artisanal works, paintings, and crafts.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Extract locale from URL parameters
  const { locale } = await params;

  // Validate locale, return 404 if unsupported
  if (!routing.locales.some((l) => l === locale)) {
    notFound();
  }

  // Fetch translations for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            <ThemeProvider>
              <Header />
              <main className="flex-1">{children}</main>
            </ThemeProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
