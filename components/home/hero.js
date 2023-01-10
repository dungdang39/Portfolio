import Animation from "./animation";
import TypeIt from "typeit-react";

export default function Hero() {
  return (
    <div className="container mx-auto flex px-5 py-24 flex-col items-center absolute position-center">
      <div className="w-3/5 flex flex-col items-center text-center mb-10">
        <div className="mainTitle">
          <TypeIt
            options={{
              strings: ["Hi!"],
              speed: 20,
              waitUntilVisible: true,
            }}
            getBeforeInit={(instance) => {
              instance.pause(400).delete(3).pause(300).type("I'm Hotae.");
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
