import Animation from "./animation";
import TypeIt from "typeit-react";

export default function Hero() {
  return (
    <div className="container mx-auto flex px-5 py-24 flex-col items-center absolute position-center">
      <div className="w-full flex flex-col items-center text-center mb-10">
        <div className="mainTitle">
          <TypeIt
            options={{
              strings: ["사용자가 보다 쉽고 편하게"],
              speed: 30,
              waitUntilVisible: true,
            }}
            getBeforeInit={(instance) => {
              instance
                .pause(1000)
                .delete(22)
                .pause(300)
                .type(
                  "안녕하세요 사용자경험에 관심이 많은 퍼블리셔 신태호입니다 :)"
                );
              return instance;
            }}
          />
        </div>
      </div>
      <div className="lg:max-w-md lg:w-full md:w-1/2 w-4/6 md:mb-30">
        <div className="mainImg">
          <div className="effectWrap">
            <Animation />
          </div>
        </div>
      </div>
    </div>
  );
}
