import Animation from "./animation";

export default function Hero() {
  return (
    <div className="container mx-auto flex px-5 py-24 flex-col items-center absolute position-center">
      <div className="w-3/5 flex flex-col items-center text-center mb-10">
        <h1 className="mainTitle title-font sm:text-4xl mb-2 text-3xl font-bold text-gray-900">
          Hotae.
        </h1>
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
