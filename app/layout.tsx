import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
 
const sfPro = localFont({
  src: [
    {
      path: '../public/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SF-Pro-Display-Semibold.otf',
      weight: '600',
      style: 'normal',
    }
  ],
})

export const metadata: Metadata = {
  title: "Emirhan Karahan",
  description: "Personal website of Emirhan Karahan",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png' },
      { url: '/favicon-192x192.png', sizes: '192x192' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sfPro.className} font-sans transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}