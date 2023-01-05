import Image from "next/legacy/image";
import Link from "next/link";

export default function ProjectItem({ data }) {
  const preData = {
    title: data.properties.Name.title[0].plain_text,
    github: data.properties.Github.url,
    youtube: data.properties.Youtube.url,
    description: data.properties.Description.rich_text[0].plain_text,
    people: data.properties.People.rich_text[0].plain_text,
    imgSrc: data.cover.file.url || data.cover.external.url,
    tags: data.properties.Tag.multi_select,
    start: data.properties.WorkPeriod.date.start,
    end: data.properties.WorkPeriod.date.end,
    detail: data.properties.WorkDetail.rich_text[0].plain_text,
    id: data.properties.idx.rich_text[0].plain_text,
    link: data.properties.Link.url,
  };

  return (
    <Link
      href={{
        pathname: `/projects/${preData.title}`,
        query: {
          preData: JSON.stringify(preData),
        },
      }}
    >
      <div className="project-card">
        <Image
          className="rounded-t-xl"
          alt="cover image"
          width="100%"
          height="60%"
          src={preData.imgSrc}
          layout="responsive"
          objectFit="cover"
        />
        <div className="p-6 flex flex-col">
          <h1 className="text-2xl font-bold break-keep">{preData.title}</h1>
          <h3 className="mt-4 text-lg break-keep">{preData.description}</h3>
          <div className="flex items-start my-3 flex-wrap">
            {preData.tags.map((aTag) => (
              <h1
                className={["badge", `badge_${aTag.color}`].join(" ")}
                key={aTag.id}
              >
                {aTag.name}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
