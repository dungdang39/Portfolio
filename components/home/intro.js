import Image from "next/legacy/image";

export default function Intro() {
  return (
    <div className="w-full z-20 bg-gray-100 dark:bg-zinc-800 rounded-t-xl">
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
                  src="/img/profile.jpg"
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
                  2년동안 웹에이전시 스타트업에서 UX/UI 디자인과 웹,앱 퍼블리싱
                </span>
                업무를 수행하였고 <br />
                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                  삼성전자 파트너사에서 삼성닷컴 페이지 내 프로모션 사이트를
                  6개월간 구축 및 유지보수
                </span>
                한 경험이 있습니다.
              </p>
              <p className="leading-relaxed text-md mb-4 break-keep">
                - 웹 개발뿐 아니라 사용자 경험에도 관심이 많아 코드상의 개선점
                외에 실질적으로 사용자의 클릭유도 및 만족도를 이끌어내기 위한
                방법을 꾸준히 공부해나가고 있습니다.
              </p>
              <p className="leading-relaxed text-md mb-4 break-keep">
                - 무엇이든 빠르게 배우고 어떤곳이든 빠르게 적응하는 점을 저의
                장점이라고 생각합니다.
                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                  "잔잔한 물이 깊게 흐른다"
                </span>{" "}
                라는 말처럼
                <br />
                꾸준하고 우직한 성장을 통해 회사를 뒷받침할 인재가 되겠습니다!
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
