import { Project } from "@/types/Project";
import Image from "next/image";
import { classNames } from "utils/functions";

type ProjectCard = Project & {
  imageOnLeft: boolean;
};

export const ProjectCard = (props: ProjectCard) => {
  return (
    <div className="grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-2 w-full h-full pt-12 md:py-24">
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
          "flex flex-col col-span-1 w-full justify-between items-center h-64 md:h-96",
          props.imageOnLeft
            ? "md:order-2 md:items-start"
            : "md:order-1 md:items-end"
        )}
      >
        <div>
          <h3
            className={classNames(
              "text-2xl px-2",
              props.imageOnLeft ? "text-left" : "text-left md:text-right"
            )}
          >
            {props.title}
          </h3>
				  {/* if no link normal h4 tag */}
          {props.link.length ? (
            <a href={props.link} target="_blank" rel="noreferrer noopener">
              <h4
                className={classNames(
                  "text-sm italic px-2",
                  props.imageOnLeft ? "text-left" : "text-left md:text-right"
                )}
              >
                {props.subtitle}
              </h4>
            </a>
          ) : (
            <h4
              className={classNames(
                "text-sm italic px-2",
                props.imageOnLeft ? "text-left" : "text-left md:text-right"
              )}
            >
              {props.subtitle}
            </h4>
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
        <div
          className={classNames(
            "flex gap-x-4 px-2 items-baseline w-full",
            props.imageOnLeft ? "justify-start" : "justify-start md:justify-end"
          )}
        >
          <div className="border bg-black text-white py-1 px-2">Tools: </div>
          <ul className="flex flex-wrap gap-x-4">
            {props.tools.map((key, index) => {
              return <li key={index}>{key}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
