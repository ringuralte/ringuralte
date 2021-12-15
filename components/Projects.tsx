import { ProjectCard } from "./ProjectCard";
import { TitleBox } from "./TitleBox";
import projects from "../data/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { faStream, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { classNames } from "utils/functions";

export const Projects: React.FC = () => {
  const [carouselView, setCarouselView] = useState(true);
  const [popOver, setPopOver] = useState({
    carousel: false,
    list: false,
  });

  const setCarouselPopup = () => {
    setPopOver({
      carousel: true,
      list: false,
    });
  };

  const setListPopup = () => {
    setPopOver({
      carousel: false,
      list: true,
    });
  };

  const removePopOver = () => {
    setPopOver({
      carousel: false,
      list: false,
    });
  };

  const setCarouselTrue = () => {
    if (!carouselView) {
      setCarouselView(true);
    }
  };

  const setCarouselFalse = () => {
    if (carouselView) {
      setCarouselView(false);
    }
  };

  return (
    <div className="flex flex-col items-center pt-24 h-full font-iosevka">
      <div className="flex relative justify-center w-full">
        <TitleBox title="Projects" />
        <div className="absolute right-0">
          <button
            type="button"
            className={classNames(
              "border-2 p-4 relative",
              carouselView ? "bg-gray-200" : "bg-none"
            )}
            onClick={setCarouselTrue}
            onMouseOver={setCarouselPopup}
            onMouseLeave={removePopOver}
          >
            <FontAwesomeIcon icon={faEllipsisH} />
            <div
              className={classNames(
                "absolute top-16 left-0 rounded-br-lg bg-black text-white text-sm font-iosevka p-1 transition-all transform duration-200 origin-top",
                popOver.carousel ? "scale-y-100" : "scale-y-0"
              )}
            >
              carousel
            </div>
          </button>
          <button
            type="button"
            className={classNames(
              "border-2 p-4 relative",
              carouselView ? "bg-none" : "bg-gray-200"
            )}
            onClick={setCarouselFalse}
            onMouseOver={setListPopup}
            onMouseLeave={removePopOver}
          >
            <FontAwesomeIcon icon={faStream} />
            <div
              className={classNames(
                "absolute top-16 left-0 rounded-br-lg bg-black text-white text-sm font-iosevka p-1 transition-all transform duration-200 origin-top",
                popOver.list ? "scale-y-100" : "scale-y-0"
              )}
            >
              list
            </div>
          </button>
        </div>
      </div>

      <div
        className={classNames(
          "transition-all transform duration-500 origin-top",
          carouselView ? "opacity-0 h-0" : "opacity-100 flex flex-col h-full"
        )}
      >
        {Object.keys(projects).map((key) => {
          return (
            <ProjectCard
              key={key}
              title={projects[key].title}
              image={projects[key].image}
              link={projects[key].link}
              body={projects[key].body}
            />
          );
        })}
      </div>

      <div
        className={classNames(
          "transition-all transform duration-500 origin-top",
          carouselView
            ? "opacity-100 flex w-full h-full swiper-custom"
            : "opacity-0 h-0 w-0"
        )}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
        >
          {Object.keys(projects).map((key: string) => {
            return (
              <SwiperSlide key={key}>
                <ProjectCard
                  title={projects[key].title}
                  image={projects[key].image}
                  link={projects[key].link}
                  body={projects[key].body}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
