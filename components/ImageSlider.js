import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from '../styles/home.module.css'

const ImageSlider = () => {
    const sliderRef = useRef(null);
    const imageSliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const imageSliderSettings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        nextArrow: <SampleNextArrow currentSlide={currentSlide} />,
        prevArrow: <SamplePrevArrow currentSlide={currentSlide} />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
     

      const nextImageSlide = () => {
        imageSliderRef.current.slickNext();
      };
    
      const prevImageSlide = () => {
        imageSliderRef.current.slickPrev();
      };

  return (
<div className={`mt-10 ${styles['slider-container']}`}>
                  <Slider ref={imageSliderRef} {...imageSliderSettings}>
                     {[...Array(9).keys()].map((i) => (
                        <div key={i}>
                        <img className="p-6" src={`/images/Rectangle 1660.png`} width="100%" alt="" />
                        </div>
                     ))}
                  </Slider>
                  <div className="controls mt-4 text-end">
                     <button onClick={prevImageSlide} className={`${styles['slider-icon']} mr-2`}>
                        <FaChevronLeft />
                     </button>
                     <button onClick={nextImageSlide} className={`${styles['slider-icon']}`}>
                        <FaChevronRight />
                     </button>
                  </div>
</div>
  );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick, currentSlide, slideCount } = props;
    return (
      <FaArrowRight
        className={`${className} ${styles.arrow} ${styles.nextArrow}`}
        style={{ ...style, display: currentSlide >= slideCount - 4 ? 'none' : 'block' }}
        onClick={onClick}
      />
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick, currentSlide } = props;
    return (
      <FaArrowLeft
        className={`${className} ${styles.arrow} ${styles.prevArrow}`}
        style={{ ...style, display: currentSlide === 0 ? 'none' : 'block' }}
        onClick={onClick}
      />
    );
  };


export default ImageSlider;
