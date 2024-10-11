"use client";

// import React, { useEffect, useState } from 'react';
import styles from './imageGallery.module.scss';
import ProductCard from '@/components/Product/ProductCard';
import currency from '@/utils/currency';
import MultiImageCarousel from '../MultiImageCarousel';
import { breakpoints } from '@/utils/breakpoint';

interface IProductData {
  id: number,
  name: string,
  price: number,
  master_image: string,
  is_discounted: boolean,
  discounted_price: number,
  discount_percentage: string,
  selling: string,
  rating: string
}

interface CarouselProps {
  products: Array<IProductData>
}

const FlashSaleCarousel = ({ products }: CarouselProps) => {
  return (
    <MultiImageCarousel 
      totalSlides={products.length}
      minSlide={2}
      breakpoint={breakpoints.sm}
    >
      {products.map((product, index) => (
        <div key={index} className={styles.carousel__slide}>
          <ProductCard
            key={`Recommendation-${product.id}`}
            name={product.name}
            price={currency(product.price)}
            image={product.master_image}
            hasDiscount={product.is_discounted}
            discountPercent={product.discount_percentage}
            discountCaption="OFF"
            selling={product.selling}
            rating={product.rating}
            isFullWidth
          />
        </div>
      ))}
    </MultiImageCarousel>
  );
};

export default FlashSaleCarousel;
