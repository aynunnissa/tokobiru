import Image from "next/image";
import styles from "./productCard.module.scss";
import DiscountBadge from "@/components/Badge/Discount";

interface IProduct {
  name: string,
  image: string,
  altImage?: string,
  price: string,
  hasDiscount: boolean,
  discountPercent?: string,
  discountCaption?: string,
  selling: string,
  rating: string,
  isFullWidth ?: boolean
}

const ProductCard = (props: IProduct) => {
  return (
    <div className={`${styles.wrapper} ${props.isFullWidth ? styles.full : ''}`}>
      <div className={styles.card}>
        <div className={styles.card__media}>
          {
            props.hasDiscount 
            && <DiscountBadge percentage={props.discountPercent ?? ''} text={props.discountCaption} />
          }
          <Image layout="responsive" width={50} height={50} alt={props.altImage ?? props.name} src={props.image} />
        </div>
        <div className={styles.product}>
          <div className={styles.product__title}>{props.name}</div>
          <div className={styles.product__price}>{props.price}</div>
          <hr className={styles.product__divider} />
          <div className={styles.product__review}>
            <span>{props.selling}</span>
            <span><span className={styles["product__review-icon"]}>&#9733;</span> {props.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;