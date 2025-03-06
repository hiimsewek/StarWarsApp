import { useState } from "react";
import DarthVaderImg from "assets/darthvader.jpeg";
import YodaImg from "assets/yoda.jpg";
import LukeSkywalkerImg from "assets/lukeskywalker.png";

const images = [
  { original: DarthVaderImg, thumbnail: DarthVaderImg, alt: "Darth Vader" },
  { original: YodaImg, thumbnail: YodaImg, alt: "Yoda" },
  { original: LukeSkywalkerImg, thumbnail: LukeSkywalkerImg, alt: "Luke Skywalker" },
];

const usePhotoGallery = () => {
  const [activeElement, setActiveElement] = useState(0);

  const handlePrev = () => {
    if (activeElement === 0) return;

    setActiveElement((prevState) => prevState - 1);
  };

  const handleNext = () => {
    if (activeElement === images.length - 1) return;

    setActiveElement((prevState) => prevState + 1);
  };

  const prevClickable = activeElement > 0;
  const nextClickable = activeElement < images.length - 1;

  const activeElementHandler = (num: number) => {
    setActiveElement(num);
  };

  return {
    images,
    activeElement,
    handlePrev,
    handleNext,
    prevClickable,
    nextClickable,
    activeElementHandler,
  };
};

export default usePhotoGallery;
