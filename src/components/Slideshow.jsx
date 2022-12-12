import { useState } from "react";

//Css
import '../css/Slideshow.scss'

//Styles

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Slideshow ({ slides }) {

  //State 
  const [currentIndex, setCurrentIndex] = useState(0);

  //Onclick function for arrow navigation
  
  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //Onclick function for dot navigation

  function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex);
  };

  //Styles

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    position: 'relative',
    objectFit: 'cover'
  };

  return (
    <div className='slider-styles'>
      <div>
        <div onClick={goToPrevious} className='left-arrow-styles'>
          ❰
        </div>
        <div onClick={goToNext} className='right-arrow-styles'>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
        <h3 className="slide-text">WE BUILD BETTER,TOGETHER</h3>
      </div>
      <div className='dots-container-styles'>
        {slides.map((slide, slideIndex) => (
          <div className="dot-style"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;