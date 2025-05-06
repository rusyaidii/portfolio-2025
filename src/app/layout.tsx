import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Rusyaidi's Portfolio | Full Stack Developer",
  description: "A portfolio showcasing my work as a Full Stack Developer, including B2B logistics platforms, web applications, and technical expertise in VueJS, NestJS, and more.",
  keywords: "Rusyaidi Mizi, Portfolio, Full Stack Developer, VueJS, NestJS, ReactJS, Web Development, B2B Logistics, Software Engineering, Web APIs, JavaScript, TypeScript, MongoDB, GraphQL",
  authors: [{ name: "Rusyaidi" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
