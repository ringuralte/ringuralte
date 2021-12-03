import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Resume = () => {
  return (
    <div className="max-w-screen-lg w-full mx-auto">
      <div className="py-12 grid grid-cols-2">
        <div className="flex flex-col col-span-1">
          <h1 className="text-4xl px-12">Lalringzuala</h1>
          <h2 className="text-lg px-12">Software Developer</h2>
          <p className="px-12 pt-6">
            Software developer with 2 years experience in Frontend developement.
            Successfully created websites for newspapers, colleges and other
            private firms.
          </p>
        </div>
        <div className="flex flex-col col-span-1 items-left ml-auto">
          <p className="flex gap-x-2 items-center px-12">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>ringuralte@protonmail.com</span>
          </p>
          <p className="flex gap-x-2 items-center px-12">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>(+91) 9650657715</span>
          </p>
          <p className="flex gap-x-2 items-center px-12">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Lengpui, Mizoram</span>
          </p>
          <p className="flex gap-x-2 items-center px-12">
            <FontAwesomeIcon icon={faGithub} />
            <span>github.com/ringuralte</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
