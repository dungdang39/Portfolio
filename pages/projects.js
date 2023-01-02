import Head from "next/head";
import Layout from "../components/layout";

export default function Projects() {
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
      <h1>프로젝트</h1>
    </Layout>
  );
}
