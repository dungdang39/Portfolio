import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/home/hero";
import Projects from "../components/projects/project-list";
import { TOKEN, DATABASE_ID } from "../config";
import Header from "../components/header";
import Ending from "../components/home/ending";
import Intro from "../components/home/intro";
import Work from "../components/home/work";
import ScrollOut from "scroll-out";
import { useEffect } from "react";

export default function Home({ projects }) {
  useEffect(() => {
    ScrollOut({
      once: true,
    });
  }, []);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

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
        <meta property="og:image" content="%PUBLIC_URL%/img/@home.png" />
        <meta property="og:site_name" content="Hotae-포트폴리오" />
        <meta
          property="og:description"
          content="포트폴리오 메인페이지 입니다."
        />
      </Head>
      {/* 랜딩 */}
      <section className="min-h-screen fixed top-0 w-full text-gray-400 body-font bg-slate-300 dark:bg-zinc-900">
        <div className="effectWrap">
          <Header />
        </div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="scroll effectWrap">
          <div className="inner">
            <span></span>
          </div>
          <p className="text-gray-800 dark:text-white">Scroll</p>
        </div>
        <Hero />
      </section>
      <section className="flex flex-col items-center justify-center text-gray-600 body-font mt-100">
        <Intro />
        <Projects projects={projects} />
        <Work />
        <Ending />
      </section>
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
