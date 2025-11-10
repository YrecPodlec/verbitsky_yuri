import type { Metadata } from "next";
import "./globals.scss";
import {Navbar} from "@/app/widgets";
export const metadata: Metadata = {
  title: "Yuri Verbitsky | WEB DEVELOPER",
  description: "Yuri's Verbitsky Web-App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
