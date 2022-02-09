import { NextPage } from "next";
import Layout from "../components/layout";
import en from "../locales/en/portfolio";
import tr from "../locales/tr/portfolio";

const PortfolioPage: NextPage<{ locale?: string }> = ({ locale }) => {
  const t = locale === "en" ? en : tr;

  return (
    <Layout>
      <section className="site-container space-y-4">{t.portfolio}</section>
    </Layout>
  );
};

export default PortfolioPage;
