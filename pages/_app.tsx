import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Head from "next/head";
import tr from "../locales/tr";
import en from "../locales/en";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const t = locale === "en" ? en : tr;

  return (
    <>
      <Head>
        <title>{t.siteTitle}</title>
        <meta name="description" content={t.siteDescription} />
      </Head>
      <div className="antialiased text-gray-700">
        <Header />
        <main className="mb-20">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
