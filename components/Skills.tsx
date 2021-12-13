import React from "react";

interface Skill {
  skill: string[];
}

const skills = [
  "html",
  "css",
  "javascript",
  "reactjs",
  "nextjs",
  "vuejs",
  "nuxtjs",
  "redux",
  "tailwindcss",
  "git",
  "netlify-cms",
  "prismic.io",
  "headless servers",
  "mysql",
  "python",
];

export const Skills: React.FC = () => {
  return (
    <div>
      <h2 className="px-12 text-4xl font-semibold text-crimson font-title">
        <span className="border-b-4 border-black">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 px-12 mt-8">
        {skills.map((item, i) => {
          return <Skill key={i} skill={item} />;
        })}
      </div>
    </div>
  );
};

const Skill = (props: Skill): JSX.Element => {
  return (
    <div className="border-2 border-crimson rounded-full hover:bg-crimson hover:text-white cursor-default">
      <span className="p-4">{props.skill}</span>
    </div>
  );
};
