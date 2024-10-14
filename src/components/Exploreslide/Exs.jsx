import './Esx.css'
import { EventDetail } from '../../MockData'
import Sx from '../Xslide/SX'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Exs = () => {
    const swiperRef = useRef(null); // Reference to control the Swiper
  
    const handlePrev = () => {
      if (swiperRef.current) swiperRef.current.swiper.slidePrev(); // Accessing the swiper instance
    };
  
    const handleNext = () => {
      if (swiperRef.current) swiperRef.current.swiper.slideNext(); // Accessing the swiper instance
    };
  
    return (
      <div className="swiper-container">
        <Swiper
          ref={swiperRef}
          slidesPerView={1.9}
          spaceBetween={30}
          className="mySwiper"
        >
          {EventDetail.map((event, index) => (
            <SwiperSlide key={index}>
              <Sx event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
  
        {/* Custom Navigation Buttons */}
        <div className="carousel-controlsEx">
          <button className="carousel-button prev-button" onClick={handlePrev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="carousel-button next-button" onClick={handleNext}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    );
  };
  
  export default Exs;
  