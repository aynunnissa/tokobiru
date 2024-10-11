import ProductSearch from "@/features/product/ProductSearch";
import { BASE_URL } from "@/lib/client";
import PageLayout from "../PageLayout";
import { Metadata } from "next";

async function GetProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
      throw new Error('Error when fetching data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
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
  const products = await GetProducts();

  return (
    <PageLayout>
      <ProductSearch data={products} />
    </PageLayout>
  );
}
