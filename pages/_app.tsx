import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import tr from "../locales/tr";
import en from "../locales/en";
import { useRouter } from "next/router";
import { UserProvider } from "@auth0/nextjs-auth0";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const t = locale === "en" ? en : tr;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <title>{t.siteTitle}</title>
        <meta name="description" content={t.siteDescription} />
      </Head>
      <div className="antialiased text-gray-700">
        <UserProvider>
          <Component {...pageProps} locale={locale} />
        </UserProvider>
      </div>
    </>
  );
}

export default MyApp;
