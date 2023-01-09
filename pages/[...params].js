import Image from "next/legacy/image";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";

export default function ProjectDetail({ preData }) {
  const parsingData = JSON.parse(preData);
  const {
    title,
    github,
    youtube,
    description,
    people,
    imgSrc,
    tags,
    start,
    end,
    detail,
    link,
  } = parsingData;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    let startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    let endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);
    return result;
  };

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
      <Header />
      <section className="min-h-screen px-6 pt-40 xl:px-0 max-w-screen-lg mx-auto w-full items-center justify-center text-gray-600 body-font text-center">
        <div className="w-full mx-auto h-96 relative rounded-xl overflow-hidden shadow-md shadow-zinc-400 dark:shadow-zinc-900">
          <Image
            alt="cover image"
            src={imgSrc}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="py-20 w-full">
          <h1 className="text-4xl font-bold break-keep mb-8">{title}</h1>
          <h3 className="text-lg break-keep mb-8">{description}</h3>
          <div className="flex items-center justify-center mb-20 flex-wrap">
            {tags.map((aTag) => (
              <h1
                className={["badge", "large", `badge_${aTag.color}`].join(" ")}
                key={aTag.id}
              >
                {aTag.name}
              </h1>
            ))}
          </div>
          <div className="flex sm:justify-between flex-row">
            {github && (
              <a
                className={`${link ? "w-2/4" : "w-full"} link_btn`}
                href={github}
                rel="noopener noreferrer"
                target="_blank"
              >
                깃허브 바로가기
              </a>
            )}
            {youtube && (
              <a
                className={`${link ? "w-2/4" : "w-full"} link_btn`}
                href={youtube}
                rel="noopener noreferrer"
                target="_blank"
              >
                시연영상 보러가기
              </a>
            )}
            {link && (
              <a
                className="link_btn w-2/4"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
              >
                링크 바로가기
              </a>
            )}
          </div>
          {detail && (
            <>
              <p className="break-keep mb-10">·</p>
              <p className="my-1 break-keep mb-4 text-zinc-600 dark:text-white">
                작업부분
              </p>
              <p className="break-all my-2 w-full m-auto p-10 mb-10 border border-gray-300 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-700/50">
                {detail}
              </p>
            </>
          )}
          <p className="break-keep mb-10">·</p>
          <p className="break-all my-2 w-full m-auto p-10 mb-10 border border-gray-300 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-700/50">
            {people}
          </p>
          <p className="break-keep mb-10">·</p>
          <p className="break-all my-2 w-full m-auto p-10 mb-10 border border-gray-300 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-700/50">
            작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
          </p>
        </div>
      </section>
    </Layout>
  );
}

export function getServerSideProps({ query: { preData } }) {
  return {
    props: {
      preData,
    },
  };
}
