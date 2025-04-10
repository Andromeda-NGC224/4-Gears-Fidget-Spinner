'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io';

import css from './ImageSlider.module.css';

interface ImageSliderProps {
  images: string[];
  style?: React.CSSProperties;
  width: number;
  height: number;
}

interface ArrowProps {
  onClick?: () => void;
}

function NextArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div className={css.nextArrow} onClick={onClick}>
      <IoIosArrowDroprightCircle size={45} />
    </div>
  );
}

function PrevArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div className={css.prevArrow} onClick={onClick}>
      <IoIosArrowDropleftCircle size={45} />
    </div>
  );
}

const ImageSlider = ({ images, style, width, height }: ImageSliderProps) => {
  const settings = {
    customPaging: () => <div className={css.paging}></div>,
    dots: true,
    dotsClass: `slick-dots`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div style={style} className={css.sliderContainer}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Слайд ${index + 1}`}
            width={width}
            height={height}
            className={css.image}
            priority
          />
        ))}
      </Slider>
      {/* <div style={{ textAlign: 'center' }}>
        <button className={css.sliderBtn} onClick={previous}>
          Previous
        </button>
        <button className={css.sliderBtn} onClick={next}>
          Next
        </button>
      </div> */}
    </div>
  );
};

export default ImageSlider;
