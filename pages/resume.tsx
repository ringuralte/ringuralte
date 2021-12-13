import { Skills } from "../components/Skills";
import { ResumeHeader } from "../components/ResumeHeader";
import { WorkExperience } from "../components/WorkExperience";
import { Interest } from "../components/Interest";

const Resume = () => {
  return (
    <div className="mx-auto w-full max-w-screen-lg">
      <ResumeHeader />

      <div className="grid grid-cols-1 gap-y-12 md:gap-y-0 md:grid-cols-2 my-12">
        {/* COLUMN ONE */}
        <div className="flex flex-col col-span-1">
          <WorkExperience />
        </div>

        {/* COLUMN TWO */}
        <div className="flex flex-col col-span-1 justify-between">
          {/* SKILLS */}
          <Skills />

          {/* INTERESTS */}
          <Interest />
        </div>
      </div>
    </div>
  );
};

export default Resume;
