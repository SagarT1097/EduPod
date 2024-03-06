import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduPod",
  description:
    "A SaaS platform for users to listen to premium exclusive podcasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar> {children} </Sidebar>
      </body>
    </html>
  );
}
