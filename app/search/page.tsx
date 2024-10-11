import ProductSearch from "@/features/product/ProductSearch";
import { BASE_URL } from "@/lib/client";
import PageLayout from "../PageLayout";

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

export default async function Home() {
  const products = await GetProducts();
  
  return (
    <PageLayout>
      <ProductSearch data={products} />
    </PageLayout>
  );
}
