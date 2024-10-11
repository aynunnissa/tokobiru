import Image from "next/image";
import styles from "./error.module.scss";
import ErrorImage from "@/public/images/error.svg";

const ErrorPage = () => {
  return(
    <div className={styles.error__wrapper}>
      <div className={styles.error__main}>
        <div className={styles.error__content}>
          <div className={styles.error__image}>
            <Image 
              src={ErrorImage}
              fill
              alt="Ilustrasi Error"
              loading="lazy"
            />
          </div>
          <h3>Server Error</h3>
          <p>Halaman tidak dapat dimuat</p>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage;