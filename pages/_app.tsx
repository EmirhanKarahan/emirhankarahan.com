import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import tr from "../locales/tr";
import en from "../locales/en";
import { useRouter } from "next/router";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const t = locale === "en" ? en : tr;

  return (
    <UserProvider>
      <Head>
        <title>{t.siteTitle}</title>
        <meta name="description" content={t.siteDescription} />
      </Head>
      <div className="antialiased text-gray-700">
        <Component {...pageProps} locale={locale} />
      </div>
    </UserProvider>
  );
}

export default MyApp;
