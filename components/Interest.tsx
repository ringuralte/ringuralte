import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faBook, faFilm } from "@fortawesome/free-solid-svg-icons";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import React from "react";

export const Interest: React.FC = () => {
  return (
    <div>
      <h2 className="px-12 mt-8 text-4xl font-semibold text-crimson font-title">
        <span className="border-b-4 border-black">Interests</span>
      </h2>
      <div className="flex flex-wrap gap-x-4 py-4 px-12 w-3/4">
        <span className="flex gap-x-2 items-center text-base">
          <FontAwesomeIcon icon={faGamepad} />
          <span>Gaming</span>
        </span>
        <span className="flex gap-x-2 items-center text-base">
          <FontAwesomeIcon icon={faLinux} />
          <span>Linux</span>
        </span>
        <span className="flex gap-x-2 items-center text-base">
          <FontAwesomeIcon icon={faBook} />
          <span>Reading</span>
        </span>
        <span className="flex gap-x-2 items-center text-base">
          <FontAwesomeIcon icon={faFilm} />
          <span>Movies</span>
        </span>
      </div>
    </div>
  );
};
