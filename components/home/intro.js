import Image from "next/legacy/image";

export default function Intro() {
  return (
    <div className="w-full z-20 bg-gray-200 dark:bg-zinc-800 rounded-t-xl">
      <div data-scroll className="container px-5 py-14 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <h2 className="title">
            <span>Introduce.</span>
          </h2>
          <div className="flex flex-col sm:flex-row mt-20">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div
                data-scroll
                className="overflow-hidden w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
              >
                <Image
                  alt="profile image"
                  width={90}
                  height={90}
                  src="/img/profile.png"
                  layout="fixed"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  신태호
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">010-9601-6456</p>
                <p className="text-base">sth0701@icloud.com</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-4 sm:border-l border-gray-300 sm:border-t-0 border-t mt-10 pt-10 sm:mt-0 text-center sm:text-left dark:border-gray-600">
              <p className="leading-relaxed text-md mb-4 break-keep">
                -{" "}
                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                  1년동안 웹에이전시 스타트업에서 웹 서비스를 개발
                </span>
                하였고 필요에 따라 UX/UI 디자인을 겸하였습니다.
              </p>
              <p className="leading-relaxed text-md mb-4 break-keep">
                - 무엇이든 빠르게 습득하고 구성원들에게 도움이 되고자
                노력하겠습니다.
              </p>
              <p className="leading-relaxed text-md mb-4 break-keep">
                - 다양한 문제들을 직접 겪어보고 해결해 나가면서 많은 경험과
                기록을 통해 성장해 나가겠습니다.
              </p>
              <p className="leading-relaxed text-md break-keep mb-8">
                - 백엔드에도 관심을 갖고있습니다. 차근차근 발을 넓혀가며{" "}
                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                  오늘보다 내일 더 잘하는 개발자
                </span>
                가 되겠습니다.
              </p>
              <p className="flex flex-wrap align-center text-base sm:justify-start justify-center">
                <Image
                  className="dark:invert"
                  alt="github image"
                  width={24}
                  height={24}
                  src="/img/git.png"
                  layout="fixed"
                  objectFit="contain"
                />{" "}
                <a
                  className="ml-4 underline underline-offset-1"
                  href="https://github.com/dungdang39"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://github.com/dungdang39
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
