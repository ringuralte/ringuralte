import Image from "next/image";

interface Project {
  title: string;
  link: string;
  body: string;
  image: string;
}

export const ProjectCard: React.FC<Project> = ({
  title,
  link,
  body,
  image,
}) => {
  return (
    <div className="grid grid-cols-2 w-full h-full my-24">
      <div className="relative col-span-1 w-full h-96">
        <Image src={image} objectFit="contain" layout="fill" />
      </div>
      <div className="flex flex-col col-span-1 justify-center w-full h-96">
        <h3 className="text-2xl">{title}</h3>
        <h4 className="text-sm italic">{link}</h4>
        <div className="pt-8 pr-24">{body}</div>
      </div>
    </div>
  );
};
