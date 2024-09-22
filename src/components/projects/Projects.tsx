import { useState } from "react";
import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { projects } from "../education/data";
import "./styles.css";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide(
      currentSlide === 0 ? projects.length - 1 : currentSlide - 1
    );
  };
  const handleNext = () => {
    setCurrentSlide(
      currentSlide === projects.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="image-slider-container">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
        />
        {projects.map((data, index) => {
          return (
            <div className="slide-content" key={data.alt}>
              <img
                src={data.img}
                alt={data.alt}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
              <p
                className={
                  currentSlide === index
                    ? "current-paragraph"
                    : "current-paragraph hide-current-paragraph"
                }
              >
                {data.description}
              </p>
            </div>
          );
        })}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicator">
          {projects.map((_, index) => {
            return (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => {
                  setCurrentSlide(index);
                }}
              ></button>
            );
          })}
        </span>
      </div>
    </section>
  );
};

export default Projects;
