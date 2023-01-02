import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Hero from "../components/home/hero";

export default function Home() {
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
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
