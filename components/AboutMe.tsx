import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { TitleBox } from "./TitleBox";
import { ComponentContainer } from "./layout/Container";

export const AboutMe: React.FC = () => {
  return (
    <ComponentContainer>
      <TitleBox title="About Me" />
      <div className="px-2 pt-12 text-lg text-left md:pt-24 md:text-2xl lg:px-0">
        <p className="font-bold">Hello,</p>
        <p className="font-bold">My name is Lalringzuala,</p>{" "}
        <p>I am a web developer from Mizoram, India.</p>
      </div>

      <div className="flex flex-col gap-y-1 gap-x-12 justify-end items-start h-48 md:flex-row md:gap-y-0 md:justify-center md:items-end md:h-72">
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
      </div>
    </ComponentContainer>
  );
};
