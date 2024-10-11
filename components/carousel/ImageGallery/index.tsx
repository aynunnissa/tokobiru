"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './imageGallery.module.scss';

interface CarouselProps {
  slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1); 
  const totalSlides = slides.length;

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setSlidesToShow(window.innerWidth < 768 ? 1 : 4);
        if (currentIndex >= totalSlides - slidesToShow) {
          setCurrentIndex(totalSlides - slidesToShow);
        }
      }
    };

    if (typeof window !== 'undefined') {
      handleResize();
    }

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex, slidesToShow, totalSlides]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalSlides - slidesToShow));
  };

  return (
    <div className={styles.carousel}>
      {totalSlides > 4 && <button
        className={`${styles.carousel__button} ${styles["carousel__button--prev"]}`}
        onClick={handlePrevClick}
        disabled={currentIndex === 0}
      >
        {`<`}
      </button>}

      <div className={styles.carousel__wrapper}>
        <div
          className={styles.carousel__slides}
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.carousel__slide}>
              <div className={styles["carousel__image-wrapper"]}>
                <Image
                  src={slide}
                  alt=""
                  fill
                  objectFit="cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 4 && <button
        className={`${styles.carousel__button} ${styles["carousel__button--next"]}`}
        onClick={handleNextClick}
        disabled={currentIndex >= totalSlides - slidesToShow}
      >
        {`>`}
      </button>}
    </div>
  );
};

export default Carousel;
