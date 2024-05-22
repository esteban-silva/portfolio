import * as React from "react";
// import './index.css';
import { CircularProgress, LinearProgress } from "@mui/material";
import SocialChip from "../../sharedComponents/SocialChip";
import { FaGithub, FaReact, FaCode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import Test from "../../../src/assets/svgl.webp";
import { LanguageContext } from "../Language/LanguageProvider";
import { useContext } from "react";

const Tags = {
  React: {
    name: "React",
    class: "bg-black text-white",
    icon: FaReact,
  },
  TypeScript: {
    name: "TypeScript",
    class: "bg-[#003159] text-white",
    icon: SiTypescript,
  },
};
// const ArrProjects = [
//   {
//     title: "SVGL - A beautiful library with SVG logos",
//     description:
//       "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
//     link: "https://svgl.vercel.app/",
//     github: "https://github.com/pheralb/svgl",
//     image: Test,
//     tags: [Tags.React, Tags.TypeScript],
//   },
// ];

const Projects = () => {
  const { translate } = useContext(LanguageContext);

  return (
    <div
      id="projects"
      data-section="proyectos"
      className="scroll-m-20 w-full  max-w-[60%] mx-auto pb-12"
    >
      <h2 className="flex items-center mb-10 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <FaCode />
        {translate("projects").title}
      </h2>
      {/* <div className="flex flex-col gap-y-16">
        {ArrProjects.map(
          ({ image, title, description, tags, link, github }) => (
            <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
              <div className="w-full">
                <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                  <img
                    alt=""
                    className="object-cover object-top w-full transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                    src={image}
                  />
                </div>
              </div>

              <div className=" w-[150%]">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {title}
                </h3>
                <div className="flex flex-wrap mt-2">
                  <ul className="flex flex-row mb-2 gap-x-2">
                    {tags.map((tag) => (
                      <li>
                        <span
                          className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `}
                        >
                          <tag.icon className="size-4" />
                          {tag.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-2 text-gray-700 dark:text-gray-400">
                    {description}
                  </div>
                  <footer className="flex items-end justify-start mt-4 gap-x-4">
                    {github && (
                      <SocialChip href={github}>
                        <FaGithub />
                        Code
                      </SocialChip>
                    )}
                    {link && <SocialChip href={link}>Preview</SocialChip>}
                  </footer>
                </div>
              </div>
            </article>
          )
        )}
      </div> */}
      <div className=" pl-10">
        <p className="text-xl font-medium mb-12 items-center flex">
          {translate("projects_doing").title}
        </p>
        <div className="relative h-5 rounded-full bg-gray-200">
          <div
            className="h-5 rounded-full bg-red-500"
            style={{ width: "70%" }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-900">
            70%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
