"use client";
import useProductGallery from "@/stores/use-gallery-store";
import styles from "./variant.module.scss";

interface IProps {
  id: number,
  name: string,
  media_id: number
}

const Variant = (props: IProps) => {
  const { setActiveMediaId, setActiveVariantId, activeVariantId } = useProductGallery();
  
  const handleClickVariant = () => {
    setActiveMediaId(props.media_id);
    setActiveVariantId(props.id);
  }

  return(
    <button onClick={handleClickVariant} className={styles.variant__wrapper}>
      <div className={`${styles.variant__main} ${activeVariantId === props.id ? styles.active : ''}`}>{props.name}</div>
    </button>
  )
}

export default Variant;