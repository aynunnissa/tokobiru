import styles from "./recommendation.module.scss"
import currency from "@/utils/currency";
import ProductCard from "../ProductCard";

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
  title?: string,
  titleHighlight?: string
  data: Array<IProductData>
}

const ListProduct = ({ title, titleHighlight, data }: IProps) => {
  return(
    <div className={styles.recommendation}>
      {title && <div className={styles.recommendation__title}>
        <h3>{title} <span>{titleHighlight}</span></h3>
      </div>}
      <div className={styles.recommendation__products}>
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
      </div>
    </div>
  )
}

export default ListProduct;