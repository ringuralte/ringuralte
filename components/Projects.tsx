import { ProjectCard } from "./ProjectCard";
import { TitleBox } from "./TitleBox";
import projects from "../data/projects.json";

export const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-24 h-full font-iosevka">
      <TitleBox title="Projects" />
      {Object.keys(projects).map((key: string) => {
        console.log(typeof key);
        console.log(key);
        return (
          <ProjectCard
            key={key}
            title={projects[key].title}
            image={projects[key].image}
            link={projects[key].link}
            body={projects[key].body}
          />
        );
      })}
    </div>
  );
};
