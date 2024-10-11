"use client";

import React, { ReactNode, useEffect, useState } from 'react';
import styles from './multiImageCarousel.module.scss';
import { breakpoints } from '@/utils/breakpoint';

interface CarouselProps {
  totalSlides: number,
  minSlide?: number,
  maxSlide?: number,
  breakpoint?: number,
  children: ReactNode
}

const MultiImageCarousel = ({ totalSlides, children, minSlide = 1, maxSlide = 4, breakpoint = breakpoints.md }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(minSlide); 

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setSlidesToShow(window.innerWidth < breakpoint ? minSlide : maxSlide);
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
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 2, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 2, totalSlides - slidesToShow));
  };

  return (
    <div className={styles.carousel}>
      {totalSlides > maxSlide && <button
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
          { children }
        </div>
      </div>

      {totalSlides > maxSlide && <button
        className={`${styles.carousel__button} ${styles["carousel__button--next"]}`}
        onClick={handleNextClick}
        disabled={currentIndex >= totalSlides - slidesToShow}
      >
        {`>`}
      </button>}
    </div>
  );
};

export default MultiImageCarousel;
