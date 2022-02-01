import { NextPage } from "next";
import Image from "next/image";
import Transition from "../components/transition";
import { useRouter } from "next/router";
import en from "../locales/en/resume.svg";
import tr from "../locales/tr/resume.svg";
import rgbDataURL from "../utils/rgbDataUrl";

const Resume: NextPage = () => {
  const { locale } = useRouter();
  const resume = locale === "en" ? en : tr;

  return (
    <Transition>
      <section className="site-container">
        <Image
          src={resume}
          alt="emirhan karahan cv resume"
          quality={100}
          placeholder="blur"
          blurDataURL={rgbDataURL(245, 245, 245)}
        ></Image>
      </section>
    </Transition>
  );
};

export default Resume;
