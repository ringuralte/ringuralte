import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

export const ResumeHeader: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-12 md:gap-y-0 md:grid-cols-2 py-12 text-white bg-crimson">
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
        <div className="flex flex-col col-span-1 md:ml-auto md:items-left">
          <div className="flex gap-x-2 items-center px-12" data-cy="email">
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
          <div className="flex gap-x-2 items-center px-12" data-cy="phone">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <a className="hover:underline" href="tel: +919650657715">
              (+91) 9650657715
            </a>
          </div>
          <div className="flex gap-x-2 items-center px-12" data-cy="address">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer noopener"
              href="https://goo.gl/maps/swWN7RGwoZW7U51Y7"
            >
              Lengpui, Mizoram
            </a>
          </div>
          <div className="flex gap-x-2 items-center px-12" data-cy="github">
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
          <div className="flex gap-x-2 items-center px-12" data-cy="website">
            <FontAwesomeIcon icon={faGlobe} />
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer noopener"
              href="https://ringuralte.dev"
            >
              ringuralte.dev
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
