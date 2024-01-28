import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import tr from "../locales/tr";
import en from "../locales/en";
import { useRouter } from "next/router";
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
        <meta
          name="keywords"
          content="emirhankarahan.com, emirhankarahan, frontend, emirhankarahan web sitesi"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emirhankarahan.com" />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <div className="antialiased">
          <Component {...pageProps} locale={locale} />
      </div>
    </>
  );
}

export default MyApp;
