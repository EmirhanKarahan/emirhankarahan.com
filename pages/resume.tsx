import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";
import en from "../locales/en/resume.svg";
import tr from "../locales/tr/resume.svg";
import rgbDataURL from "../utils/rgbDataUrl";

const ResumePage: NextPage<{ locale?: string }> = ({ locale }) => {
  const resume = locale === "en" ? en : tr;

  return (
    <Layout>
      <section className="site-container">
        <Image
          src={resume}
          alt="emirhan karahan cv resume"
          quality={100}
          placeholder="blur"
          blurDataURL={rgbDataURL(245, 245, 245)}
        ></Image>
      </section>
    </Layout>
  );
};

export default ResumePage;
