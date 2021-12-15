import Image from "next/image";

interface Project {
  title: string;
  link: string;
  subtitle: string;
  body: string;
  image: string;
}

export const ProjectCard = (props: Project) => {
  return (
    <div className="grid grid-cols-2 w-full h-full my-24">
      <div className="relative col-span-1 w-full h-96">
        <Image
          alt={props.title}
          src={props.image}
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className="flex flex-col col-span-1 w-full h-96">
        <h3 className="text-2xl">{props.title}</h3>
        {props.link.length ? (
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm italic"
          >
            {props.subtitle}
          </a>
        ) : (
          <h4 className="text-sm italic">{props.subtitle}</h4>
        )}
        <div className="pt-8 pr-24">{props.body}</div>
      </div>
    </div>
  );
};
