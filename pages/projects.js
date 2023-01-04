import Head from "next/head";
import Layout from "../components/layout";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>신태호 포트폴리오</title>
        <meta
          name="description"
          content="반갑습니다. 프론트엔드 개발자 신태호입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="container mx-auto px-8 pt-5 pb-2 mt-20 text-lg text-right font-medium 2xl:w-4/5 sm:text-xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500 font-bold">
          {projects.results.length}
        </span>{" "}
        개
      </h1>

      <div className="container mx-auto px-4 grid grid-cols-1 2xl:w-4/5 md:grid-cols-2 pb-10 mb-20 gap-4 sm:w-full">
        {projects.results.map((aProject) => (
          <ProjectItem key={aProject.id} data={aProject} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      // sorts: [
      //   {
      //     property: "Name",
      //     direction: "ascending",
      //   },
      // ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
