import { ProjectCard } from "./ProjectCard";
import { TitleBox } from "./TitleBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { faStream, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { classNames } from "utils/functions";
import { ComponentContainer } from "./layout/Container";
import { Project } from "@/types/Project";

export const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [carouselView, setCarouselView] = useState(false);
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
    <ComponentContainer>
      <div className="flex relative justify-center w-full">
        <TitleBox title="Projects" />
        <div className="absolute right-0 mr-1 md:mr-0">
          <button
            type="button"
            className={classNames(
              "border-2 p-2 md:p-4 relative focus:outline-none",
              carouselView ? "bg-gray-200" : "bg-none"
            )}
            onClick={setCarouselTrue}
            onMouseOver={setCarouselPopup}
            onMouseLeave={removePopOver}
          >
            <FontAwesomeIcon icon={faEllipsisH} />
            <div
              className={classNames(
                "absolute top-12 md:top-16 left-0 rounded-br-lg bg-black text-white text-sm font-iosevka p-1 transition-all transform duration-200 origin-top",
                popOver.carousel ? "scale-y-100" : "scale-y-0"
              )}
            >
              carousel
            </div>
          </button>
          <button
            type="button"
            className={classNames(
              "border-2 p-2 md:p-4 relative focus:outline-none",
              carouselView ? "bg-none" : "bg-gray-200"
            )}
            onClick={setCarouselFalse}
            onMouseOver={setListPopup}
            onMouseLeave={removePopOver}
          >
            <FontAwesomeIcon icon={faStream} />
            <div
              className={classNames(
                "absolute top-12 md:top-16 left-0 rounded-br-lg bg-black text-white text-sm font-iosevka p-1 transition-all transform duration-200 origin-top",
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
          "transition-all transform duration-100 origin-top",
          carouselView
            ? "scale-0 h-0 w-0"
            : "scale-100 flex flex-col h-full w-full"
        )}
      >
        {Object.keys(projects).map((key) => {
          const intKey: number = parseInt(key);
          const imageOnLeft = intKey % 2 === 0;
          return (
            <ProjectCard
              key={key}
              imageOnLeft={imageOnLeft}
              subtitle={projects[intKey].subtitle}
              title={projects[intKey].title}
              image={projects[intKey].image}
              link={projects[intKey].link}
              body={projects[intKey].body}
              tools={projects[intKey].tools}
            />
          );
        })}
      </div>

      <div
        className={classNames(
          "transition-all transform duration-100 origin-top swiper-custom",
          carouselView ? "scale-100 flex h-full w-full" : "scale-0 h-0 w-0"
        )}
      >
        <Swiper
          className="h-[600px]"
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
        >
          {Object.keys(projects).map((key: string) => {
            const intKey: number = parseInt(key);
            return (
              <SwiperSlide key={key}>
                <ProjectCard
                  imageOnLeft={true}
                  subtitle={projects[intKey].subtitle}
                  title={projects[intKey].title}
                  image={projects[intKey].image}
                  link={projects[intKey].link}
                  tools={projects[intKey].tools}
                  body={projects[intKey].body}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </ComponentContainer>
  );
};
