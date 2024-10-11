"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './imageGallery.module.scss';
import useProductGallery from '@/stores/use-gallery-store';
import Skeleton from '@/components/Skeleton';

interface IMedia {
  id: number,
  src: string
}

interface CarouselProps {
  slides: IMedia[];
}

const Carousel = ({ slides }: CarouselProps) => {
  const { setMainImage, setActiveMediaId, setActiveVariantId, activeMediaId } = useProductGallery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1); 
  const totalSlides = slides.length;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalSlides - slidesToShow));
  };

  const handleImageClick = (src: string) => {
    setMainImage(src);
    setActiveMediaId(null);
    setActiveVariantId(null);
  }

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

  useEffect(() => {
    if (activeMediaId) {
      const activeMediaInd = slides.findIndex((media) => media.id === activeMediaId);
      setCurrentIndex(activeMediaInd);
    }
  }, [activeMediaId, slides]);

  return (
    <div className={styles.carousel}>
      {totalSlides > slidesToShow && <button
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
          {slides ? slides.map((slide, index) => (
            <div 
              key={index} 
              className={styles.carousel__slide}
              onClick={() => handleImageClick(slide.src)}
            >
              <div className={styles["carousel__image-wrapper"]}>
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  objectFit="cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          )) : [...Array(4).fill(<Skeleton width='100%' height='100%' />)]}
        </div>
      </div>

      {totalSlides > slidesToShow && <button
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
