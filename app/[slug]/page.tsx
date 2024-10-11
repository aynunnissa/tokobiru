import styles from "./page.module.scss"
import OtherProducts from "@/features/product-detail/OtherProducts";
import { BASE_URL } from "@/lib/client";
import ProductDetail from "@/features/product-detail/ProductDetail";
import PageLayout from "../PageLayout";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Detail Produk",
  description: "Situs belanja termurah dan terbaik di kotamu",
  openGraph: {
    title: "Tokobiru Indonesia",
    description: "Situs belanja termurah dan terbaik di kotamu",
    url: "https://tokobiru-kohl.vercel.app/",
    siteName: "Tokobiru",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 600,
        alt: "t",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Home({ params }: Readonly<ProductPageProps>) {
  const { product, products } = await GetProductDetail(params.slug);

  if (!product || !products) return <p>Loading...</p>

  metadata.title = product.name;
  metadata.description = product.description;
  
  return (
    <PageLayout>
      <ProductDetail product={product} />
      <div className={styles.others}>
        <OtherProducts data={products} />
      </div>
    </PageLayout>
  );
}
