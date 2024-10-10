import styles from "./recommendation.module.scss"
import ProductCard from "@/components/ProductCard";
import currency from "@/utils/currency";

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

const RecommendationSection = ({ data }: IProps) => {
  return(
    <div className={styles.recommendation}>
      <div className={styles.recommendation__title}>
        <h3>Rekomendasi <span>Untuk Kamu</span></h3>
      </div>
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

export default RecommendationSection;