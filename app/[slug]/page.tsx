import Navbar from "@/components/Navbar";
import styles from "./page.module.scss"
import OtherProducts from "@/features/product-detail/OtherProducts";
import { BASE_URL } from "@/lib/client";
import ProductDetail from "@/features/product-detail/ProductDetail";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

async function GetProductDetail(slug: string) {
  try {
    const [productDetailResp, productResp] = await Promise.all([
      fetch(`${BASE_URL}/products?slug=${slug}`),
      fetch(`${BASE_URL}/products`)
    ]);

    if (!productDetailResp.ok || !productResp) {
      throw new Error('Error when fetching data');
    }

    const productDetail = await productDetailResp.json();
    const products = await productResp.json();

    return {
      product: productDetail[0],
      products
    };
  } catch (error) {
    console.error(error);
    return {
      product: {},
      products: []
    };
  }
}

export default async function Home({ params }: Readonly<ProductPageProps>) {
  const { product, products } = await GetProductDetail(params.slug);
  
  if (!product || !products) return <p>Loading...</p>
  
  return (
    <div className="page">
      <Navbar />
      <div style={{ margin: '6rem 2rem 0 2rem'}}>
        <div className={styles.main}>
          <ProductDetail product={product} />
          <div className={styles.others}>
            <OtherProducts data={products} />
          </div>
        </div>
      </div>
    </div>
  );
}
