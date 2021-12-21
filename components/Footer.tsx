import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col flex-wrap items-center py-2 w-full max-w-screen-lg text-white bg-black md:flex-row md:justify-around font-iosevka">
      <div className="flex gap-x-2 items-center" data-cy="email">
        <FontAwesomeIcon icon={faEnvelope} />
        <a
          className="hover:underline"
          target="_blank"
          rel="noreferrer noopener"
          href="mailto:ringuralte@protonmail.com"
        >
          ringuralte@protonmail.com
        </a>
      </div>
      <div className="flex gap-x-2 items-center" data-cy="github">
        <FontAwesomeIcon icon={faGithub} />
        <a
          className="hover:underline"
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/ringuralte"
        >
          github.com/ringuralte
        </a>
      </div>
    </footer>
  );
};
