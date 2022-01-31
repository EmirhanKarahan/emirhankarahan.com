import { NextPage } from "next";
import Image from "next/image";
import Transition from "../components/transition";
import { useRouter } from "next/router";
import en from "../locales/en/resume.svg";
import tr from "../locales/tr/resume.svg";

const Resume: NextPage = () => {
  const { locale } = useRouter();
  const resume = locale === "en" ? en : tr;

  return (
    <Transition>
      <section className="site-container">
        <Image src={resume}></Image>
      </section>
    </Transition>
  );
};

export default Resume;
