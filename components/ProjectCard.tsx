import Image from "next/image";
import { classNames } from "utils/functions";

interface Project {
  title: string;
  link: string;
  subtitle: string;
  body: string;
  image: string;
  imageOnLeft: boolean;
}

export const ProjectCard = (props: Project) => {
  return (
    <div className="grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-2 w-full h-full mt-12 md:my-24">
      <div
        className={classNames(
          "relative col-span-1 w-full h-72 md:h-96",
          props.imageOnLeft ? "md:order-1" : "md:order-2"
        )}
      >
        <Image
          alt={props.title}
          src={props.image}
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div
        className={classNames(
          "flex flex-col col-span-1 w-full items-center h-64 md:h-96",
          props.imageOnLeft ? "md:order-2 md:items-start" : "md:order-1 md:items-end"
        )}
      >
        <h3 className="text-2xl px-2">{props.title}</h3>
        {props.link.length ? (
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm italic px-2"
          >
            {props.subtitle}
          </a>
        ) : (
          <h4 className="text-sm italic px-2">{props.subtitle}</h4>
        )}
        <div
          className={classNames(
            "pt-4 md:pt-8 px-2 ",
            props.imageOnLeft ? "lg:pr-24" : "md:text-right lg:pl-24"
          )}
        >
          {props.body}
        </div>
      </div>
    </div>
  );
};
