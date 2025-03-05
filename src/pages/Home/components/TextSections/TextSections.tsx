import { useIsDesktop } from "hooks";
import { SectionItem } from "../SectionItem";
import { StyledSectionsContainer } from "./TextSections.styled";

const TextSections = () => {
  const isDesktop = useIsDesktop();

  return (
    <StyledSectionsContainer>
      <SectionItem label="1. One">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum fugit error assumenda
        alias, illum consequuntur magnam sint eius a architecto temporibus, facere ducimus
        aspernatur ut quas libero! Temporibus, quos! Eos!
      </SectionItem>
      <SectionItem label="2. Two" animationDelay={isDesktop ? 0.2 : 0}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum fugit error assumenda
        alias, illum consequuntur magnam sint eius a architecto temporibus, facere ducimus
        aspernatur ut quas libero! Temporibus, quos! Eos!
      </SectionItem>

      <SectionItem label="3. Three" animationDelay={isDesktop ? 0.4 : 0}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum fugit error assumenda
        alias, illum consequuntur magnam sint eius a architecto temporibus, facere ducimus
        aspernatur ut quas libero! Temporibus, quos! Eos!
      </SectionItem>
    </StyledSectionsContainer>
  );
};

export default TextSections;
