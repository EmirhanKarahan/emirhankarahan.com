import { NextPage } from "next";
import Transition from "../components/transition";
import en from "../locales/en/portfolio";
import tr from "../locales/tr/portfolio";
import { useRouter } from "next/router";

const Portfolio: NextPage = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : tr;

  return (
    <Transition>
      <div className="site-container space-y-4">{t.portfolio}</div>
    </Transition>
  );
};

export default Portfolio;
