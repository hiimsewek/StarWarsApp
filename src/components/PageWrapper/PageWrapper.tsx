import { StyledWrapper } from "./PageWrapper.styled";

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default PageWrapper;
