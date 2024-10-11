import ProductSearch from "@/features/product/ProductSearch";
import { BASE_URL } from "@/lib/client";
import PageLayout from "../PageLayout";
import { Metadata } from "next";
import ErrorPage from "@/components/Error";

async function GetProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
      throw new Error('Error when fetching data');
    }

    const data = await response.json();
    return {
      data,
      error: false
    };
  } catch (error) {
    console.error(error);
    return {
      data: [],
      error: true
    };
  }
}

export const metadata = {
  title: "Jual Produk Harga Terbaik & Termurah",
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

export default async function Home() {
  const { data: products, error} = await GetProducts();

  return (
    <PageLayout>
      {error && <ErrorPage />}
      {!error && <ProductSearch data={products} />}
    </PageLayout>
  );
}
