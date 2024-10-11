"use client"

import Image from "next/image";
import styles from "./mainImage.module.scss"
import useProductGallery from "@/stores/use-gallery-store";
import Skeleton from "@/components/Skeleton";

const MainImage = () => {
  const { mainImage } = useProductGallery();

  return(
    <div className={styles.image__master}>
        {mainImage ? <Image 
          src={mainImage} 
          alt="" 
          fill
          style={{ objectFit: 'contain' }}
        /> : <Skeleton width="100%" height="100%" />}
      </div>
  )
}

export default MainImage;