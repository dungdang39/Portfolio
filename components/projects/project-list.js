import ProjectItem from "./project-item";

export default function Projects({ projects }) {
  return (
    <div className="w-full z-20 bg-gray-200 dark:bg-zinc-800">
      <div data-scroll className="container px-5 py-14 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto w-full">
          <h2 className="title">
            <span>Projects.</span>
          </h2>
          <h3 className="w-full pb-5 text-sm text-right font-medium sm:text-lg mt-10">
            총 프로젝트 :
            <span className="pl-4 text-blue-500 font-bold">
              {projects.results.length}
            </span>{" "}
            개
          </h3>
          <div className="w-full grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 pb-10 gap-8">
            {projects.results.map((aProject) => (
              <ProjectItem key={aProject.id} data={aProject} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
