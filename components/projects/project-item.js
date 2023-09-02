import Image from "next/legacy/image";
import Link from "next/link";

export default function ProjectItem({ data }) {
  const preData = {
    title: data.properties.Name.title[0].plain_text,
    github: data.properties.Github.url,
    youtube: data.properties.Youtube.url,
    description: data.properties.Description.rich_text[0].plain_text,
    people: data.properties.People.rich_text[0].plain_text,
    imgSrc: data.cover.file.url,
    tags: data.properties.Tag.multi_select,
    start: data.properties.WorkPeriod.date.start,
    end: data.properties.WorkPeriod.date.end,
    detail: data.properties.WorkDetail.rich_text[0]?.plain_text,
    id: data.properties.idx.rich_text[0].plain_text,
    link: data.properties.Link.url,
  };

  return (
    <Link
      href={{
        pathname: `/${preData.title}`,
        query: {
          preData: JSON.stringify(preData),
        },
      }}
    >
      <div className="project-card group">
        <Image
          className="blur-sm group-hover:blur-none transition duration-300"
          alt="cover image"
          width="100%"
          height="100%"
          src={preData.imgSrc}
          layout="responsive"
          objectFit="cover"
        />
        <div className="absolute p-3 flex flex-col w-full h-full text-center justify-center group-hover:opacity-0 transition duration-300 bg-black bg-opacity-50">
          <h1 className="text-sm font-bold break-keep">{preData.title}</h1>
          <h3 className="mt-2 text-xs break-keep">{preData.description}</h3>
          <div className="flex items-start mt-3 flex-wrap mx-auto">
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
