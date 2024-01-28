import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import emirhankarahan from "../../public/emirhankarahan.png";
import en from "../../locales/en/index";
import tr from "../../locales/tr/index";
import rgbDataURL from "../../utils/rgbDataUrl";
import { FunctionComponent } from "react";
import LocalizationSelectBox from "../localizationSelectBox";
import HeaderIcons from "./headerIcons";

const Header: FunctionComponent = () => {
  const router = useRouter();
  const { locale, pathname } = router;
  const t = locale === "en" ? en : tr;

  return (
    <header className="relative site-container py-4">
      <LocalizationSelectBox />
      <Image
        alt="emirhan karahan"
        src={emirhankarahan}
        className="rounded-full"
        width={150}
        style={{
          objectFit: "cover",
        }}
        quality={100}
        placeholder="blur"
        blurDataURL={rgbDataURL(245, 245, 245)}
      />
      <h1 className="text-2xl font-bold">{t.headerTitle}</h1>
      <h2 className="font-normal">{t.headerSubtitle}</h2>
      <HeaderIcons />
      <p className="mt-2">{t.headerDescription}</p>
      <span className="font-semibold tracking-wide">
        emirhan.karahan@outlook.com
      </span>
      <h2 className="text-2xl mt-12 space-x-2">
      <span className="font-bold underline">
        {t.navBlog}
      </span>
      </h2>
    </header>
  );
};

export default Header;
