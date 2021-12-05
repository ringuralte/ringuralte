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
  /* "googling questions", */
  "netlify-cms",
  "prismic.io",
  "headless servers",
  "mysql",
  "python",
];


const Resume = () => {
  return (
    <div className="mx-auto w-full max-w-screen-lg">
      <div className="grid grid-cols-2 py-12 text-white bg-crimson">
        <div className="flex flex-col col-span-1">
          <h1 className="px-12 text-4xl font-semibold font-title">
            Lalringzuala
          </h1>
          <h2 className="px-12 text-lg">Software Developer</h2>
          <p className="px-12 pt-6">
            Software developer with 2 years experience in Frontend developement.
            Successfully created websites for a number of services and firms.
          </p>
        </div>
        <div className="flex flex-col col-span-1 ml-auto items-left">
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
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer noopener"
              href="https://goo.gl/maps/swWN7RGwoZW7U51Y7"
            >
              Lengpui, Mizoram
            </a>
          </p>
          <p className="flex gap-x-2 items-center px-12">
            <FontAwesomeIcon icon={faGithub} />
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/ringuralte"
            >
              github.com/ringuralte
            </a>
          </p>
          <p className="flex gap-x-2 items-center px-12">
            <FontAwesomeIcon icon={faGlobe} />
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer noopener"
              href="https://ringuralte.dev/"
            >
              ringuralte.dev
            </a>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 my-12">
        {/* COLUMN ONE */}
        <div className="flex flex-col col-span-1">
          <h2 className="px-12 text-4xl font-bold text-crimson font-title">
            <span className="border-b-4 border-black">Work Experience</span>
          </h2>

          <div className="px-12 mt-8 text-2xl font-semibold font-title">
            Frontend Developer
          </div>
          <div className="px-12 text-xl">
            <span className="text-sm">for</span> Makkati
            <span className="px-4 text-sm italic">07/2020 - Present</span>
          </div>
          <ul className="flex flex-col gap-y-4 px-16 mt-4 list-disc">
            {/* <li>
              Work as Frontend developer for different projects producing
              stunning visual elements of various web applications by
              translating UI/UX designs into code that meet design goals
            </li> */}
            <li>Documenting code written in php and laravel framework</li>
            <li>
              Succesfully implemented the frontend for newspaper company
              Vanglaini at{" "}
              <a
                className="hover:underline"
                target="_blank"
                href="https://vanglaini.org"
                rel="noreferrer noopener"
              >
                vanglaini.org
              </a>{" "}
              using React and Nextjs framework
            </li>
            <li>
              Created frontend for an Archival System used by the Synod Council,
              Mizoram using Vue and Nuxt
            </li>
          </ul>

          <div className="px-12 mt-8 text-2xl font-semibold font-title">
            Freelance Work
          </div>
          <ul className="flex flex-col gap-y-4 px-16 mt-4 list-disc">
            <li>
              Developed website for architect firm lbassociates at{" "}
              <a
                className="hover:underline"
                target="_blank"
                href="https://lbassociates.in"
                rel="noreferrer noopener"
              >
                lbassociates.in
              </a>{" "}
              using nextjs on the frontend and prismic.io as a headless
              backend/cms and hosted on netlify.
            </li>
            <li>
              Website for Nursing College BNCollege of Nursing at{" "}
              <a
                className="hover:underline"
                target="_blank"
                href="https://bncollegeofnursingmizoram.com"
                rel="noreferrer noopener"
              >
                bncollegeofnursingmizoram.com
              </a>{" "}
              using nextjs and netlifycms as the cms, hosted on netlify.
            </li>
          </ul>
        </div>

        {/* COLUMN TWO */}
        <div className="flex flex-col col-span-1 justify-between">
          {/* SKILLS */}
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

          {/* INTERESTS */}
          <div>
            <h2 className="px-12 mt-8 text-4xl font-semibold text-crimson font-title">
              <span className="border-b-4 border-black">Interests</span>
            </h2>
            <div className="flex flex-wrap gap-x-4 py-4 px-12 w-3/4">
              <p className="flex gap-x-2 items-center text-base">
                <FontAwesomeIcon icon={faGamepad} />
                <span>Gaming</span>
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
