import {
  StyledGroupContainer,
  StyledIllustration,
  StyledTechItem,
  StyledTechListContainer,
} from "./TechnologyGroupItem.styled";

type TechnologyItemProps = {
  group: string[];
  image: string;
  reversed: boolean;
  translateValue: number;
};

const TechnologyItem = ({ group, image, reversed, translateValue }: TechnologyItemProps) => {
  const animation = { opacity: 1, transform: "translateX(0)" };

  return (
    <StyledGroupContainer
      $reversed={reversed}
      initial={{ opacity: 0, transform: `translateX(${translateValue}px)` }}
      animate={animation}
      whileInView={animation}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <StyledIllustration src={image} alt="Illustration" $reversed={reversed} />
      <StyledTechListContainer $reversed={reversed}>
        {group.map((item) => {
          return <StyledTechItem key={item}>{`- ${item}`}</StyledTechItem>;
        })}
      </StyledTechListContainer>
    </StyledGroupContainer>
  );
};

export default TechnologyItem;
