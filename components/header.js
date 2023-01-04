import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col 2xl:w-4/5 md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="text-xl font-semibold">신태호 포트폴리오</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              홈
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
