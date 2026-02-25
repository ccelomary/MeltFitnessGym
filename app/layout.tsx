import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melt Fitness Gym | Transform Your Body in UAE",
  description:
    "Modern fitness gym in UAE with personal training, high-energy classes, seasonal offers, and transformation-driven coaching.",
  openGraph: {
    title: "Melt Fitness Gym",
    description: "Join Melt Fitness Gym for vibrant classes, smart coaching, and real body transformation.",
    url: "https://meltfitnessgym.vercel.app",
    siteName: "Melt Fitness Gym",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Melt Fitness Gym training floor"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
