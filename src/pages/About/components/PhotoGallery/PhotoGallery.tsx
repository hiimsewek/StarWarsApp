import {
  StyledImg,
  StyledNav,
  StyledSliderContainer,
  StyledThumbContainer,
  StyledThumbImg,
} from "./PhotoGallery.styled";
import usePhotoGallery from "./usePhotoGallery";

const PhotoGallery = () => {
  const {
    activeElement,
    activeElementHandler,
    handleNext,
    handlePrev,
    images,
    nextClickable,
    prevClickable,
  } = usePhotoGallery();

  return (
    <>
      <StyledSliderContainer>
        <StyledNav $type="prev" onClick={handlePrev} $clickable={prevClickable} />
        {images.map((image, i) => {
          return (
            <StyledImg
              key={i}
              src={image.original}
              alt={image.alt}
              initial={{ transform: "translateX(0)" }}
              animate={{ transform: `translateX(-${activeElement * 100}%)` }}
            />
          );
        })}

        <StyledNav $type="next" onClick={handleNext} $clickable={nextClickable} />
      </StyledSliderContainer>

      <StyledThumbContainer $numOfElements={images.length}>
        {images.map((image, i) => {
          return (
            <StyledThumbImg
              key={image.thumbnail}
              src={image.thumbnail}
              alt={image.alt}
              onClick={activeElementHandler.bind(this, i)}
              $active={activeElement === i}
            />
          );
        })}
      </StyledThumbContainer>
    </>
  );
};

export default PhotoGallery;
