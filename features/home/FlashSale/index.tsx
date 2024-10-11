import styles from "./flashSale.module.scss";
import FlashSaleCarousel from "@/components/CarouselTemp/FlashSale";

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

interface IProps {
  data: Array<IProductData>
}

const FlashSaleSection = ({ data }: IProps) => {
  return(
    <div className={styles.flashsale__wrapper}>
      <div className={styles.flashsale__main}>
        <div className={styles.flashsale__header}>
          <div className={styles["flashsale__header-title"]}>
            <h3>FLASH SALE</h3>
            <span>Harga Murah Cuma Hari Ini</span>
          </div>
        </div>
        <div>
          <FlashSaleCarousel products={[...data, ...data]} />
        </div>
      </div>
    </div>
  );
}

export default FlashSaleSection;