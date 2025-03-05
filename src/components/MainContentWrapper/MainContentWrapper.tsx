import { StyledContentWrapper } from "./MainContentWrapper.styled";

type MainContentWrapperProps = {
  children: React.ReactNode;
};

const MainContentWrapper = ({ children }: MainContentWrapperProps) => {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
};

export default MainContentWrapper;
