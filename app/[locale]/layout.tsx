import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: "/peacelove.ico",           // browser tab icon
      shortcut: "/peacelove.ico",       // shortcut icon
      apple: "/Peace&Love_MainLogo_Gold.svg", // Apple touch icon
    },
    openGraph: {
      type: "website",
      locale: locale === 'zh' ? 'zh_CN' : locale === 'th' ? 'th_TH' : 'en_US',
      url: `https://pnl-intl.com/${locale}`,
      siteName: "P&L International",
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [
        {
          url: "/Peace&Love_MainLogo_Gold.svg",
          width: 1200,
          height: 630,
          alt: "P&L International Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["/Peace&Love_MainLogo_Gold.svg"],
    },
    alternates: {
      canonical: `https://pnl-intl.com/${locale}`,
      languages: {
        en: 'https://pnl-intl.com/en',
        zh: 'https://pnl-intl.com/zh',
        th: 'https://pnl-intl.com/th',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Provide all messages to the client side
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
