import { StyledOverlay } from "./Overlay.styled";

type OverlayProps = {
  onClick?: () => void;
};

const Overlay = ({ onClick }: OverlayProps) => {
  return <StyledOverlay onClick={onClick}></StyledOverlay>;
};

export default Overlay;
