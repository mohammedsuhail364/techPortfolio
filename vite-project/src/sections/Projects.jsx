import { useState } from "react";
import { myProjects } from "../constants";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];
  const projectCount = myProjects.length;
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : projectCount + 1;
      }
    });
  };
  return (
    <section className="c-space my-20">
      <p className="head-text"> My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              className="w-full h-96 object-cover rounded-xl"
              src={currentProject.spotlight}
              alt="spotlight"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg "
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className=" w-10 h-10 shadow-sm"
            />
          </div>
          <div className=" flex flex-col gap-5 text-white-600 my-5">
            <p className=" text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className=" flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div className="tech-logo" key={index}>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 text-xl"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
            </a>
          </div>
          <div className=" flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
                <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/>
            </button>
            
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;