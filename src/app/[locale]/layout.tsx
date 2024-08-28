import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { type Metadata } from "next";



import "@/styles/tailwind.css";
import { RootLayout } from "./components/RootLayout";

export const metadata: Metadata = {
  title: {
    template: "Grupa Krayr",
    default: "Grupa Krayr: A Top-tier Recruitment Partner in Poland and Beyond",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale} className="h-full bg-teal-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <RootLayout>{children}</RootLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
