import { StyledCenterContainer } from "./CenterContainer.styled";

type CenterContainerProps = {
  children: React.ReactNode;
};

const CenterContainer = ({ children }: CenterContainerProps) => {
  return <StyledCenterContainer>{children}</StyledCenterContainer>;
};

export default CenterContainer;
