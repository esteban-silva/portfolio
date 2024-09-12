import * as React from "react";
import "./index.css";
import IntroImage from "../../../src/assets/recortada.png";
import Chip from "../../sharedComponents/Chip";
import { CiMail } from "react-icons/ci";
import SocialChip from "../../sharedComponents/SocialChip";
import { LanguageContext } from "../Language/LanguageProvider";
import { useContext } from "react";
import CVIngles from "../../../src/assets/CV_Esteban_Silva_Ingles.pdf";
import CVEspanol from "../../../src/assets/CV_Esteban_Silva_Espanol.pdf";
import { FaDownload } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const Introduction = () => {
  const { translate, currentLanguage } = useContext(LanguageContext);
  return (
    <div id="introduction" className="py-44 w-[640px]">
      <div className="flex gap-5">
        <img src={IntroImage} width="64" style={{ borderRadius: "9999px" }} />
        <Chip>
          <a
            href="https://www.linkedin.com/in/estebansilvac"
            target="_blank"
            style={{ borderRadius: "9999px" }} rel="noreferrer"
          >
            {translate("introduction_button_available").title}
          </a>
        </Chip>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
        {translate("introduction_title").title}
      </h1>
      <p className=" flex flex-col mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
        <strong>{translate("introduction_content").title}</strong>
        {translate("introduction_content").label}
      </p>
      <div className="flex flex-wrap gap-4 mt-8">
        <SocialChip href="mailto:esteban_silva11@hotmail.com">
          <IoMdMail />
          {translate("social_button_contact").title}
        </SocialChip>
        <SocialChip href="https://www.linkedin.com/in/estebansilvac">
          <FaLinkedin />
          Linkedin
        </SocialChip>
        <SocialChip href={currentLanguage === "es" ? CVEspanol : CVIngles} download="CV_Esteban_Silva.pdf">
          <FaDownload />
          CV
        </SocialChip>
      </div>
    </div>
  );
};

export default Introduction;
