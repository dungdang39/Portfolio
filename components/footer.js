import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="body-font">
        <div className="container px-5 py-6 mx-auto flex items-center 2xl:w-4/5 sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <span className="text-xl font-semibold">HO TAE</span>
          </Link>
          <p className="text-center text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2022 — Website created using Next.js
            <a
              href="https://github.com/dungdang39"
              rel="noopener noreferrer"
              className="text-gray-600 ml-3 dark:text-gray-500"
              target="_blank"
            >
              @HoTae
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
