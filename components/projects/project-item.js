import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const youtube = data.properties.Youtube.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const people = data.properties.People.rich_text[0].plain_text;
  const imgSrc = data.cover.file.url || data.cover.external.url;
  const tags = data.properties.Tag.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

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
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        alt="cover image"
        width="100%"
        height="60%"
        src={imgSrc}
        layout="responsive"
        objectFit="cover"
      />
      <div className="p-6 flex flex-col">
        <h1 className="text-2xl font-bold break-keep">{title}</h1>
        <h3 className="mt-4 text-lg break-keep">{description}</h3>
        {/* {github && (
          <a href={github} target="_blank">
            깃허브 바로가기
          </a>
        )}
        {youtube && (
          <a href={youtube} target="_blank">
            시연영상 보러가기
          </a>
        )} */}
        <div className="flex items-start my-3 flex-wrap">
          {tags.map((aTag) => (
            <h1
              className={["badge", `badge_${aTag.color}`].join(" ")}
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
        <p className="my-1 break-keep">{people}</p>
        <p className="my-1 break-keep">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
      </div>
    </div>
  );
}
