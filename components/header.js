import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font sticky top-0 z-10 dark:border-gray-700 bg-gray-100 shadow dark:bg-zinc-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col 2xl:w-4/5 md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="text-xl font-semibold">HO TAE</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              홈
            </Link>
            <Link href="/about_me" className="mr-5 hover:text-gray-900">
              About Me
            </Link>
            <Link href="/projects" className="mr-5 hover:text-gray-900">
              프로젝트
            </Link>
          </nav>
          {/* 다크모드 토글 버튼 */}
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
