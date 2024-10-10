import { ReactNode } from "react";
import styles from "./badge.module.scss";

interface IBadge {
  children: ReactNode
}

const Badge = ({  children }: IBadge) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {children}
      </div>
    </div>
  )
}

export default Badge