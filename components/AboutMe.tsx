import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { TitleBox } from "./TitleBox";

export const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-full pt-24 font-iosevka">
			  <TitleBox title="About Me" />
      <p className="pt-24 text-2xl">
        Hi, I'm Lalringzuala, a web developer from Mizoram, India.
      </p>

      <div className="pt-24 flex gap-x-12">
        <div className="flex gap-x-2 items-center " data-cy="email">
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
        <div className="flex gap-x-2 items-center" data-cy="phone">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <a className="hover:underline" href="tel: +919650657715">
            (+91)9650657715
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
      </div>
    </div>
  );
};
