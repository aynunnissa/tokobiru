// import ProductCard from "@/components/Product/ProductCard";
import styles from "./flashSale.module.scss";
// import currency from "@/utils/currency";
import FlashSaleCarousel from "@/components/carousel/FlashSale";

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
        {/* <div className={styles.flashsale__products}>
          {data.map(product => (
            <ProductCard
              key={`Recommendation-${product.id}`}
              name={product.name}
              price={currency(product.price)}
              image={product.master_image}
              hasDiscount={product.is_discounted}
              discountPercent={product.discount_percentage}
              discountCaption="OFF"
              selling={product.selling}
              rating={product.rating}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default FlashSaleSection;