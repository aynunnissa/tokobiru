import Badge from "..";
import styles from "./discount.module.scss";

interface IDiscountBadgeProps {
  percentage: string,
  text?: string
}

const DiscountBadge = ({ percentage, text }: IDiscountBadgeProps) => {
  return (
    <Badge>
      <div className={styles["discount__badge-content"]}>
        <p>{percentage}</p>
        {text && <p>{text}</p>}
      </div>
    </Badge>
  )
}

export default DiscountBadge