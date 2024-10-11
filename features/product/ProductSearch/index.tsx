"use client";

import ProductCard from "@/components/Product/ProductCard";
import styles from "./productSearch.module.scss"
import useProductSearch from "@/stores/use-product-search";
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

const ProductSearch = ({ data }: IProps) => {
  const { keyword } = useProductSearch();

  return(
    <div className={styles.search}>
      <div className={styles.search__title}>
        <h3>Hasil pencarian untuk <span>{keyword}</span></h3>
      </div>
      <div className={styles.search__products}>
        {data.map(product => (
          <ProductCard 
            key={`Product-${product.id}`}
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

export default ProductSearch;