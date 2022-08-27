import React from 'react';
import Slider from 'react-slick';
import ProjectsData from '../../Data/ProjectsData';
import ProjectCard from './ProjectCard';
import './SliderStyles.css';

function customPaging() {
  return <div className="team-dots bg-theme1"></div>;
}

function appendDots(dots) {
  return <div>{dots}</div>;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  draggable: false,
};

function Projects() {
  return (
    <div className="slider h-full overflow-x-hidden ">
      <h1 className="text-4xl text-center mb-10 font-medium title-font text-gray-900">
        Projects
      </h1>
      <Slider {...settings} customPaging={customPaging} appendDots={appendDots}>
        {ProjectsData.map((project, index) => {
          return (
            <>
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                viewLive={project.hosted}
                isHosted={project.isHosted}
                viewCode={project.github.frontend}
              />
            </>
          );
        })}
      </Slider>
    </div>
  );
}

export default Projects;
