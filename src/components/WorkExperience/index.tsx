import * as React from "react";
import { WorkExperienceItem } from "./WorkExperienceItem";
import { MdOutlineWorkHistory } from "react-icons/md";
import { LanguageContext } from "../Language/LanguageProvider";
import { useContext } from "react";

const WorkExperience = () => {
  const { translate } = useContext(LanguageContext);

  const experience = [
    {
      date: "2022 - 2024",
      title: "Sofware Developer",
      company: "Cencosud",
      description: translate("work_experience_cenco").label,
    },
    {
      date: "2019 - 2022",
      title: "GeneXus Developer",
      company: "New Age Data",
      description: translate("work_experience_nad").label,
    },
  ];

  return (
    <div id="work-experience" className=" w-[60%] pb-12">
      <h2 className="flex items-center mb-10 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <MdOutlineWorkHistory />
        {translate("work_experience_title").title}
      </h2>
      {experience.map((exp) => (
        <WorkExperienceItem {...exp} />
      ))}
    </div>
  );
};

export default WorkExperience;
