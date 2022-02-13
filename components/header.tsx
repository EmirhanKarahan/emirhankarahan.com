import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import emirhankarahan from "../public/emirhankarahan.png";
import en from "../locales/en/index";
import tr from "../locales/tr/index";
import rgbDataURL from "../utils/rgbDataUrl";
import { FunctionComponent } from "react";
import LocalizationSelectBox from "./localizationSelectBox";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import SuperpeerIcon from "./superpeerIcon";

const Header: FunctionComponent = () => {
  const router = useRouter();
  const { locale, pathname } = router;
  const t = locale === "en" ? en : tr;

  return (
    <header className="relative site-container py-6">
      <LocalizationSelectBox />

      <Image
        alt="emirhan karahan"
        src={emirhankarahan}
        className="rounded-full"
        width={150}
        height={150}
        objectFit="cover"
        quality={100}
        placeholder="blur"
        blurDataURL={rgbDataURL(245, 245, 245)}
      />
      <h1 className="text-2xl font-bold">{t.headerTitle}</h1>
      <h2 className="font-normal">{t.headerSubtitle}</h2>
      <div className="flex space-x-2 text-2xl mt-1">
        <a
          href="https://twitter.com/nickekarahan"
          className="text-blue-400 hover:-translate-y-1"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
        <a
          href="https://github.com/emirhankarahan"
          className="hover:-translate-y-1"
          aria-label="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/emirhankarahan/"
          className="text-blue-700 hover:-translate-y-1"
          aria-label="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://superpeer.com/emirhankarahan"
          className="hover:-translate-y-1"
          aria-label="Superpeer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SuperpeerIcon />
        </a>
      </div>
      <p className="mt-2">{t.headerDescription}</p>
      <span className="font-semibold tracking-wide">
        emirhan.karahan@outlook.com
      </span>

      <nav className="mt-5 underline">
        <Link href="/">
          <a className="hover:text-blue-600">{t.navBlog}</a>
        </Link>
        <Link href="/portfolio">
          <a className="hover:text-blue-600 mx-2">{t.navPortfolio}</a>
        </Link>
        <Link href="/resume">
          <a className="hover:text-blue-600">{t.navResume}</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
