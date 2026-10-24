
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Shakib.dev | Full Stack Developer & AI",
  description:
    "Md Shakib's portfolio featuring full-stack development, AI applications, and real-world projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Navbar />
        {children}
        </body>
    </html>
  );
}
