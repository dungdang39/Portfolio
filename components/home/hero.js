import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font lg:text-4xl sm:text-3xl text-2xl mb-4 font-medium text-gray-900 break-keep">
          안녕하세요
          <br className="hidden lg:inline-block" />
          프론트엔드 개발자
          <br className="hidden lg:inline-block" />
          신태호입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          얼음에 동력은 가는 있다. 끓는 따뜻한 구할 못하다 못할 품고 부패뿐이다.
          소금이라 그들의 그들에게 보내는 찾아다녀도, 인간이 황금시대를 있는가?
          청춘 우리 간에 아니더면, 때까지 고동을 이상을 찾아다녀도, 아니다.
          용기가 이 뜨고, 그들은 풀밭에 이성은 있는가? 청춘 곳으로 곳이 끓는
          얼음과 뜨거운지라, 그들의 부패뿐이다. 주며, 속잎나고, 원대하고, 예수는
          그림자는 힘있다. 꽃이 가진 그것은 있는가?
        </p>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex text-white bg-indigo-500/90 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg dark:text-white"
          >
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
