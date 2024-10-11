import styles from "./page.module.scss"
import { BASE_URL } from "@/lib/client";
import ProductDetail from "@/features/product-detail/ProductDetail";
import PageLayout from "../PageLayout";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import ErrorPage from "@/components/Error";

const OtherProducts = dynamic(() => import("@/features/product-detail/OtherProducts"));

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
      products,
      error: false
    };
  } catch (error) {
    console.error(error);
    return {
      product: {},
      products: [],
      error: true
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
  const { product, products, error } = await GetProductDetail(params.slug);

  if (!product || !products) return <p>Loading...</p>

  metadata.title = product.name;
  metadata.description = product.description;
  
  return (
    <PageLayout>
      {error && <ErrorPage />}
      {!error && <>
        <ProductDetail product={product} />
        <div className={styles.others}>
          <OtherProducts data={products} />
        </div>
      </>}
    </PageLayout>
  );
}
