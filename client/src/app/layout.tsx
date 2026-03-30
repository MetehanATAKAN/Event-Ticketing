import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";

import "./globals.css";

import { AuthProvider } from "@/providers/auth-provider";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PulsePass | Event Ticketing Platform",
    template: "%s | PulsePass",
  },
  description:
    "Feature bazli Next.js arayuzu ile etkinlik, auth ve dashboard akislarini yonet.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${sora.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider>
          <QueryProvider>
            <AuthProvider>{children}</AuthProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
