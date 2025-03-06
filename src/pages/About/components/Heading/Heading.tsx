import CvPic from "assets/cv_pic.png";
import { StyledCvPic, StyledHeadingContainer, StyledHeadingLabel } from "./Heading.styled";

const Heading = () => {
  return (
    <StyledHeadingContainer
      initial={{ opacity: 0, transform: "translateY(10px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <StyledCvPic src={CvPic} alt="CV Picture" />
      <StyledHeadingLabel>Seweryn Woźniak</StyledHeadingLabel>
    </StyledHeadingContainer>
  );
};

export default Heading;
