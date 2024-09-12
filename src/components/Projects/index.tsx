import * as React from "react";
import SocialChip from "../../sharedComponents/SocialChip";
import {
  FaGithub,
  FaReact,
  FaCode,
  FaAws,
  FaNode,
  FaDocker,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import breakPointFrontendLight from "../../../src/assets/break-point-frontend-light.png";
import breakPointFrontendDark from "../../../src/assets/break-point-frontend-dark.png";
import breakPointBackendDark from "../../../src/assets/break-point-backend-dark.png";
import breakPointBackendLight from "../../../src/assets/break-point-backend-light.png";
import { LanguageContext } from "../Language/LanguageProvider";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeProvider";

const Projects = () => {
  const { translate } = useContext(LanguageContext);
  const { currentTheme } = useContext(ThemeContext);

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
    Aws: {
      name: "AWS",
      class: "bg-black text-white",
      icon: FaAws,
    },
    Node: {
      name: "Node",
      class: "bg-[#003159] text-white",
      icon: FaNode,
    },
    Express: {
      name: "Express",
      class: "bg-black text-white",
      icon: SiExpress,
    },
    Docker: {
      name: "Docker",
      class: "bg-[#003159] text-white",
      icon: FaDocker,
    },
  };
  const ArrProjects = [
    {
      title: "Break-Point - Frontend",
      description: translate("projects-break-point-frontend").title,
      link: "http://break-point.lat",
      github: "https://github.com/esteban-silva/break-point-frontend",
      imageLight: breakPointFrontendLight,
      imageDark: breakPointFrontendDark,
      tags: [Tags.React, Tags.TypeScript, Tags.Aws],
    },
    {
      title: "Break-Point - Backend",
      description: translate("projects-break-point-backend").title,

      // "Backend utilizado por break-point frontend cuyo proposito es almacenar y manejar el flujo de informacion necesario para su funcionamiento. La misma fue creada usando Nodejs y Express. La misma esta alojada en AWS (EC2, RDS y Route53) y pipeline mediante GitHub Actions el cual hace un deploy automatico al hacer push a la rama master.",
      github: "https://github.com/esteban-silva/break-point-backend",
      imageLight: breakPointBackendLight,
      imageDark: breakPointBackendDark,
      tags: [Tags.Aws, Tags.Node, Tags.Express, Tags.Docker],
    },
  ];

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
      <div className="flex flex-col gap-y-16">
        {ArrProjects.map(
          ({
            imageLight,
            imageDark,
            title,
            description,
            tags,
            link,
            github,
          }) => (
            <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
              <div className="w-full">
                <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                  <img
                    alt=""
                    className="object-cover object-top w-full transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                    src={currentTheme === "light" ? imageLight : imageDark}
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
      </div>
    </div>
  );
};

export default Projects;
