"use client";

import MainImage from "@/components/ProductDetail/MainImage";
import ImageGallery from "@/components/Carousel/ImageGallery";
import styles from "./productDetail.module.scss";
import currency from "@/utils/currency";
import { useEffect } from "react";
import useProductGallery from "@/stores/use-gallery-store";
import Variant from "@/components/Chip/Variant";

interface IMedia {
  id: number,
  src: string
}

interface IVariants {
  id: number,
  name: string,
  media_id: number
}

interface IProductData {
  id: number,
  name: string,
  price: number,
  master_image: string,
  is_discounted: boolean,
  discounted_price: number,
  discount_percentage: string,
  selling: string,
  rating: string,
  media: IMedia[],
  variants: IVariants[]
}

interface IProps {
  product: IProductData
}

const ProductDetail = ({ product }: IProps) => {
  const {  setMainImage, activeMediaId } = useProductGallery();

  useEffect(() => {
    setMainImage(product.master_image)
  }, [product.master_image, setMainImage])

  useEffect(() => {
    if (activeMediaId) {
      const activeMedia = product.media?.find(med => med.id === activeMediaId);
      setMainImage(activeMedia?.src ?? product.master_image);
    }
  }, [activeMediaId, product.master_image, product.media, setMainImage])

  return(
    <div className={styles.product__detail}>
      <div className={styles.product__gallery}>
        <div className={styles.product__images}>
          <MainImage />
          <div className={styles["product__images-carousel"]}>
            <ImageGallery slides={product.media} />
          </div>
        </div>
      </div>
      <div className={styles.product__information}>
        <h1>{product.name}</h1>
        <div className={styles.product__review}>
          <p><span>&#9733;</span> {product.rating}</p> | <p>{product.selling}</p>
        </div>
        <div className={styles.product__price}>
          <p className={styles["product__price-current"]}>{currency(product.is_discounted ? product.discounted_price : product.price)}</p>
          {
            product.is_discounted && 
            <div className={styles.product__discount}>
              <p className={styles["price-discounted"]}>{currency(product.price)}</p>
              <div className={styles["product__discount-label"]}>
                {product.discount_percentage} OFF
              </div>
            </div>
          }
        </div>
        <div className={styles.product__description}>
          <p className={styles["product__description-title"]}>Tentang Produk</p>
          <p className={styles["product__description-content"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
        <div className={styles.product__description}>
          <p className={styles["product__description-title"]}>Variasi Produk</p>
          <div className={styles.product__variant}>
            {product.variants.map(variant => (
              <Variant
                key={variant.name}
                id = {variant.id}
                name={variant.name}
                media_id={variant.media_id}
              />
            ))}
          </div>
        </div>
        <div className={styles.product__actions}>
          <button>Beli Sekarang</button>
        </div>
        <hr className={styles.product__divider} />
        <div className={styles.product__report}>
          <p>Produk bermasalah? <span>Laporkan</span></p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;