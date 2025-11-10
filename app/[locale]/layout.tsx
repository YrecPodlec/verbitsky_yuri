import type { Metadata } from "next";
import "./globals.scss";
import {Navbar} from "@/app/[locale]/widgets";
import {routing} from "@/i18n/routing";
import {hasLocale} from "use-intl";
import {notFound} from "next/navigation";
import {NextIntlClientProvider} from "next-intl";
import React from "react";
export const metadata: Metadata = {
  title: "Yuri Verbitsky | WEB DEVELOPER",
  description: "Yuri's Verbitsky Web-App",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
                                             children,
                                             params
                                         }: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider>
            <Navbar />
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}