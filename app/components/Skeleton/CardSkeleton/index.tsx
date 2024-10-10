import Skeleton from "..";
import styles from "./cardSkeleton.module.scss"

const CardSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.card__media}>
          <Skeleton width="100%" height="100%" />
        </div>
        <div className={styles.product}>
          <Skeleton width="100%" height="20px" />
          <Skeleton width="100%" height="20px" />
          <Skeleton width="100%" height="1px" />
          <Skeleton width="100%" height="10px" />
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;