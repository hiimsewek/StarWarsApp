import TechIllustration from "assets/technologies-illustration.png";
import ToolsIllustration from "assets/tools-illustration.png";
import { StyledTechLabel } from "./TechnologyList.styled";
import { TechnologyGroupItem } from "../TechnologyGroupItem";

const technologies = [
  {
    group: ["React", "React Native", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
    image: TechIllustration,
  },
  {
    group: [
      "Redux Toolkit",
      "Zustand",
      "Formik + yup",
      "Firebase",
      "Styled Components",
      "Tailwind",
      "Material UI",
    ],
    image: ToolsIllustration,
  },
];

const TechnologyList = () => {
  return (
    <div>
      <StyledTechLabel
        initial={{ opacity: 0, transform: "translate(-10px)" }}
        animate={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 1 }}
      >
        Technologies that I am familiar with
      </StyledTechLabel>

      {technologies.map(({ group, image }, i) => {
        const reversed = (i + 1) % 2 === 0;

        const translateValue = reversed ? 10 : -10;

        return (
          <TechnologyGroupItem
            key={i}
            group={group}
            image={image}
            reversed={reversed}
            translateValue={translateValue}
          />
        );
      })}
    </div>
  );
};

export default TechnologyList;
