import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import styles from '../styles/home.module.css'

const TestimonialSlider = () => {
    const sliderRef = useRef(null);
    const imageSliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const nextTestimonialSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevTestimonialSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="mt-10 lg:p-14 md:pt-8 p-4 md:pb-10 slider-div">
            
    <Slider ref={sliderRef} {...testimonialSettings}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
       <div key={index} className={`p-2  ${styles['slide-item']} slick-slide`}>
       <div className=' bg-white rounded-md p-4'>
          <div className="pt-2 md:space-x-1 space-x-0">
             <span className={`${styles['checked']} fa fa-star`}></span>
             <span className={`${styles['checked']} fa fa-star`}></span>
             <span className={`${styles['checked']} fa fa-star`}></span>
             <span className={`${styles['checked']} fa fa-star`}></span>
             <span className={`${styles['checked']} fa fa-star`}></span>
          </div>
          <h1 className={`${styles['testimonialbox-h1']} mt-8`}>Fast Performance</h1>
          <p className={`${styles['testimonialbox-p']} mt-2`}>See where you’re making and spending money in real.</p>
          <div className="mt-20">
             <p className={`${styles['testimonialbox-p']}`}>Lorem ipsum dolor -16 hour ago</p>
          </div>
          </div>
       </div>
    ))}
    </Slider>
   <div className="controls mt-4 text-end">
       <button onClick={prevTestimonialSlide} className={`${styles['slider-icon']} mr-2`}>
          <FaChevronLeft />
       </button>
       <button onClick={nextTestimonialSlide} className={`${styles['slider-icon']}`}>
          <FaChevronRight />
       </button>
   </div>
</div>
  );
};



export default TestimonialSlider;
