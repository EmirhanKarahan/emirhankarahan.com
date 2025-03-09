import type { Metadata } from "next";
import "./globals.css";
import { sfPro } from "./fonts";

export const metadata: Metadata = {
  title: "Emirhan Karahan",
  description: "Personal website of Emirhan Karahan",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sfPro.variable} font-sans transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
