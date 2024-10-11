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
          <p className={styles["product__description-content"]}>Samsung HD TV 32 UA32T4001 adalah solusi ideal bagi Anda yang mencari TV 32 inch terjangkau dengan kualitas terbaik. Dengan teknologi Wide Colour Enhancer, TV ini menghadirkan warna yang kaya dan tajam, memungkinkan Anda menikmati gambar yang lebih hidup dan detail. Dilengkapi dengan fitur Clean View, TV Samsung 32 inch ini mampu mengurangi noise dan interferensi, sekaligus meningkatkan warna dan kontras untuk tampilan yang lebih jernih. Dengan desain yang ramping dan dimensi yang kompak, TV ini memiliki ukuran 73.5 x 44 x 7.8 cm tanpa kaki dan berat hanya 4.3 kg, sehingga cocok untuk berbagai ruangan.</p>
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