import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Best Veg Restaurant in Undri, Pune | Sugee Veg',
  description: 'Experience the best vegetarian food in Undri, Pune. Sugee Veg offers authentic, high-quality Indian, Chinese, and Street Food. Rated 4.7 stars by 890+ customers.',
  keywords: ["Veg restaurant Undri, Best veg restaurant near me, Pure veg Pune, Indian chinese street food Undri, Sugee Veg Pune"],
  openGraph: {
    "title": "Sugee Veg | Pure Veg Delights in Undri, Pune",
    "description": "Pure Veg Delights, Freshly Served. Authentic taste, quality, and affordability.",
    "siteName": "Sugee Veg"
  },
  twitter: {
    "card": "summary_large_image"
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
