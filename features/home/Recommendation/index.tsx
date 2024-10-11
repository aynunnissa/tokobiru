import ListProduct from "@/components/Product/ListProduct";

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
  return (
    <ListProduct 
      data={data}
      title="Rekomendasi Produk"
      titleHighlight="Untuk Kamu"
    />
  )
}

export default RecommendationSection;