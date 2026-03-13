import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";
import { Trajan_Pro } from "next/font/google";



export const metadata: Metadata = {
  title: 'Салон красоты «Премудрая» в Ижевске | Маникюр, Парикмахер, Массаж',
  description: 'Премиум салон красоты в Ижевске. Маникюр, парикмахерские услуги, макияж, брови, массаж от опытных мастеров. Рейтинг 5.0★ на основе 211 отзывов. Запись онлайн!',
};



const trajanPro = Trajan_Pro({
  variable: "--font-trajan-pro",  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${trajanPro.variable} antialiased`}>
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
