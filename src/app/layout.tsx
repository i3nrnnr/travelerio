import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Traveler.io",
  description: "Traveler project for Firebase hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.className)}> 
      <body>
        <div className="relative z-10 container mx-auto px-4 flex flex-col min-h-screen">
          <Header/>
          <main className="flex-grow">{children}</main>
          <footer className="p-4 border-t text-center text-sm text-muted-foreground">
            Built for the Firebase Studio Championship.
          </footer>
        </div>
      </body>
    </html>
  );
}
