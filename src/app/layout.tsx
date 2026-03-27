import type { Metadata } from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import React from "react";
import {NextThemeProvider} from "@/components/NextThemeProvider";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: "swap"
})

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Personal portfolio",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${spaceGrotesk.className} min-h-screen flex flex-col bg-surface text-on-surface transition-colors duration-300 antialiased`}>
        <NextThemeProvider>
            {children}
        </NextThemeProvider>
        </body>
        </html>
    );
}
