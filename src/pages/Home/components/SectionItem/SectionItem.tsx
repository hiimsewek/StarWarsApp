import { StyledSectionItem, StyledSectionLabel } from "./SectionItem.styled";

type SectionItemProps = {
  label: string;
  children: React.ReactNode;
  animationDelay?: number;
};

const SectionItem = ({ label, animationDelay, children }: SectionItemProps) => {
  return (
    <StyledSectionItem
      initial={{ transform: "translateY(50px)" }}
      whileInView={{ transform: "translateY(0)" }}
      transition={{ duration: 1, delay: animationDelay }}
      viewport={{ once: true }}
    >
      <StyledSectionLabel>{label}</StyledSectionLabel>
      <div>{children}</div>
    </StyledSectionItem>
  );
};

export default SectionItem;
