"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './infiniteCarousel.module.scss';
import Image from 'next/image';
import ChevronLeftIcon from "@/public/icons/chevron-left.svg";
import ChevronRightIcon from "@/public/icons/chevron-right.svg";

type IBanner = {
  id: number,
  src: string,
  alt_image: string
}

type IRes = {
  banners: Array<IBanner>
}

const InfiniteCarousel = ({ banners }: IRes) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<HTMLDivElement | null>(null);
  
  const totalSlides = banners.length;

  const handleNext = useCallback(() => {
    if (slidesRef.current) {
      if (currentIndex === totalSlides) {
        slidesRef.current.style.transition = 'none';
        setCurrentIndex(0);
        slidesRef.current.style.transform = `translateX(-${0 * 100}%)`;
      } else {
        setCurrentIndex(currentIndex + 1);
        slidesRef.current.style.transition = 'transform 1s ease-in-out';
        slidesRef.current.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
      }
    }
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, handleNext]);

  const handlePrev = () => {
    if (slidesRef.current) {
      if (currentIndex === 0) {
        slidesRef.current.style.transition = 'none';
        setCurrentIndex(totalSlides);
        slidesRef.current.style.transform = `translateX(-${totalSlides * 100}%)`;
      } else {
        setCurrentIndex(currentIndex - 1);
        slidesRef.current.style.transition = 'transform 1s ease-in-out';
        slidesRef.current.style.transform = `translateX(-${(currentIndex - 1) * 100}%)`;
      }
    }
  };

  const handleTransitionEnd = () => {
    if (currentIndex === totalSlides) {
      if (slidesRef.current) {
        slidesRef.current.style.transition = 'none';
        setCurrentIndex(0);
        slidesRef.current.style.transform = `translateX(-${0 * 100}%)`;
      }
    }
  };

  return (
   <div>
       <div className={styles.carousel__container}>
      <div
        className={styles.carousel__slides}
        ref={slidesRef}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div className={styles.carousel__slide} key={`banner-${banner.id}`}>
            <Image width={800} height={350} className={styles.img} src={banner.src} alt={banner.alt_image} />
          </div>
        ))}
        <div className={styles.carousel__slide}>
          <Image width={800} height={350} className={styles.img} src={banners[0].src} alt={banners[0].alt_image} />
        </div>
      </div>

      <button className={`${styles.carousel__button} ${styles["carousel__button--prev"]}`} onClick={handlePrev}>
        <span className={styles["carousel__button--icon"]}>
          <Image src={ChevronLeftIcon} width={15} height={15} alt='Go to the previous banner' />
        </span>
      </button>
      <button className={`${styles.carousel__button} ${styles["carousel__button--next"]}`} onClick={handleNext}>
        <span className={styles["carousel__button--icon"]}>
          <Image src={ChevronRightIcon} width={15} height={15} alt='Go to the next banner' />
        </span>
      </button>
    </div>
   </div>
  );
};

export default InfiniteCarousel;
