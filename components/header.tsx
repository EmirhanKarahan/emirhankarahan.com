import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import emirhankarahan from "../public/emirhankarahan.png";
import Transition from "./transition";
import en from "../locales/en/index";
import tr from "../locales/tr/index";
import rgbDataURL from "../utils/rgbDataUrl";

const Header = () => {
  const router = useRouter();
  const { locale, pathname } = router;
  const t = locale === "en" ? en : tr;

  return (
    <Transition initial={{ y: 0, opacity: 0 }}>
      <header className="relative site-container py-6">
        <select
          value={locale}
          onChange={(val) => {
            router.push(pathname, pathname, { locale: val.target.value });
          }}
          className="absolute right-0 top-0 mt-1 mr-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        >
          <option value="tr">tr</option>
          <option value="en">en</option>
        </select>

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
        <h3>{t.headerSubtitle}</h3>
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
    </Transition>
  );
};

export default Header;
