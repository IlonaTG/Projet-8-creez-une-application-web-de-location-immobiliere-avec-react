import React, { useState } from 'react';
import ArrowBack from '../../assets/arrows/arrow-back.png'
import ArrowForward from '../../assets/arrows/arrow-forward.png'
import '../../sass/layout/_slideshow.scss'

function Slideshow({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? pictures.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === pictures.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slideshow-container">
        {pictures.length > 1 && (
        <div className="slideshow-navigation">
            <img className='navigation-back' src={ArrowBack} alt="Previous" onClick={goToPreviousSlide} />
            <img className='navigation-forward' src={ArrowForward} alt="Next" onClick={goToNextSlide} />
        </div>
        )}
        <div className="slide">
        <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        {pictures.length > 1 && (
        <div className='slide-count'>
            <span>{`${currentSlide + 1}/${pictures.length}`}</span>
        </div>
        )}
      </div>
    </div>
  );
}

export default Slideshow;
