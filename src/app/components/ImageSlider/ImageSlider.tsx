'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import css from './ImageSlider.module.css';
import { useRef } from 'react';

const images = [
  '/images/GeometrySectionImg.png',
  '/images/GeometrySectionImg.png',
  '/images/GeometrySectionImg.png',
  '/images/GeometrySectionImg.png',
  '/images/GeometrySectionImg.png',
];

// let sliderRef = useRef(null);
// const next = () => {
//   sliderRef.slickNext();
// };
// const previous = () => {
//   sliderRef.slickPrev();
// };

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div style={{ ...style, display: 'none' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div style={{ ...style, display: 'none' }} onClick={onClick} />;
}

const ImageSlider = () => {
  const settings = {
    customPaging: () => (
      <div
        style={{
          width: '20px',
          height: '10px',
          background: '#cddbe3',
          borderRadius: '12.42px',
        }}
      ></div>
    ),
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={css.sliderContainer}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Слайд ${index + 1}`}
            width={328}
            height={328}
            className={css.image}
            priority
          />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
