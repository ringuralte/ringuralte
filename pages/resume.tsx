import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
  faGlobe,
  faGamepad,
  faBook,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinux } from "@fortawesome/free-brands-svg-icons";
import Skill from "../components/skill";

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
  "googling questions",
  "netlify-cms",
  "prismic.io",
  "headless servers",
  "mysql",
  "python",
];

const Resume = () => {
  return (
    <div className="max-w-screen-lg w-full mx-auto">
      <div className="py-12 grid grid-cols-2 bg-crimson text-white">
        <div className="flex flex-col col-span-1">
          <h1 className="text-4xl px-12">Lalringzuala</h1>
          <h2 className="text-lg px-12">Software Developer</h2>
          <p className="px-12 pt-6">
            Software developer with 2 years experience in Frontend developement.
            Successfully created websites for a number of services and firms.
          </p>
        </div>
        <div className="flex flex-col col-span-1 items-left ml-auto">
          <p className="flex gap-x-2 items-center px-12">
            <FontAwesomeIcon icon={faEnvelope} />
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer noopener"
              href="mailto:ringuralte@protonmail.com"
            >
              ringuralte@protonmail.com
            </a>
          </p>
          <p className="flex gap-x-2 items-center px-12">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <a className="hover:underline" href="tel: +919650657715">
              (+91) 9650657715
            </a>
          </p>
          <p className="flex gap-x-2 items-center px-12">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Lengpui, Mizoram</span>
          </p>
          <p className="flex gap-x-2 items-center px-12">
            <FontAwesomeIcon icon={faGithub} />
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.github.com/ringuralte"
            >
              github.com/ringuralte
            </a>
          </p>
          <p className="flex gap-x-2 items-center px-12">
            <FontAwesomeIcon icon={faGlobe} />
            <span>www.ringuralte.dev</span>
          </p>
        </div>
      </div>

      <div className="my-12 grid grid-cols-2">
        {/* COLUMN ONE */}
        <div className="col-span-1 flex flex-col">
          <h2 className="text-4xl px-12 text-crimson font-semibold">
            <span className="border-b-4 border-black">Work Experience</span>
          </h2>

          <div className="text-2xl px-12 mt-8 font-semibold">
            Frontend Developer
          </div>
          <div className="text-xl px-12">
            <span className="text-sm">for</span> Makkati 
            <span className="text-sm px-4 italic">07/2020 - Present</span>
          </div>
          <ul className="px-16 mt-4 gap-y-4 flex flex-col list-disc">
            {/* <li>
              Work as Frontend developer for different projects producing
              stunning visual elements of various web applications by
              translating UI/UX designs into code that meet design goals
            </li> */}
            {/* <li>Documenting code written in php and laravel framework</li> */}
            <li>
              Succesfully implemented the frontend for newspaper company
              Vanglaini at www.vanglaini.org using React and Nextjs framework
            </li>
            <li>
              Created frontend for an Archival System used by the Synod Council,
              Mizoram using Vue and Nuxt
            </li>
          </ul>

          <div className="text-2xl px-12 mt-8 font-semibold">Freelance Work</div>
          <ul className="px-16 mt-4 gap-y-4 flex flex-col list-disc">
            <li>
              Developed website for architect firm lbassociates at
              lbassociates.in using nextjs on the frontend and prismic.io as a
              headless backend/cms and hosted on netlify.
            </li>
            <li>
              Website for Nursing College BNCollege of Nursing at
              bncollegeofnursingmizoram.com using nextjs and netlifycms as the
              cms, hosted on netlify.
            </li>
          </ul>
        </div>

        {/* COLUMN TWO */}
        <div className="col-span-1 flex flex-col justify-between">
          {/* SKILLS */}
          <div>
            <h2 className="text-4xl px-12 text-crimson font-semibold">
              <span className="border-b-4 border-black">Skills</span>
            </h2>
            <div className="flex flex-wrap px-12 gap-x-2 gap-y-2 mt-8">
              {skills.map((item, i) => {
                return <Skill key={i} skill={item} />;
              })}
            </div>
          </div>

          {/* INTERESTS */}
          <div>
            <h2 className="text-4xl px-12 text-crimson font-semibold mt-8">
              <span className="border-b-4 border-black">Interests</span>
            </h2>
            <div className="flex py-4 gap-x-4 px-12">
              <p className="flex gap-x-2 items-center text-base">
                <FontAwesomeIcon icon={faGamepad} />
                <span>Video Games</span>
              </p>
              <p className="flex gap-x-2 items-center text-base">
                <FontAwesomeIcon icon={faLinux} />
                <span>Linux</span>
              </p>
              <p className="flex gap-x-2 items-center text-base">
                <FontAwesomeIcon icon={faBook} />
                <span>Reading</span>
              </p>
              <p className="flex gap-x-2 items-center text-base">
                <FontAwesomeIcon icon={faFilm} />
                <span>Movies</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
