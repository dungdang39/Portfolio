import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font w-full absolute top-0 z-20 bg-transparent">
        <div className="container mx-auto flex flex-wrap p-5 flex-col 2xl:w-4/5 md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="/"
              className="sm:mr-5 hover:text-gray-900 text-gray-800"
            >
              홈
            </Link>
          </nav>
          {/* 다크모드 토글 버튼 */}
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
