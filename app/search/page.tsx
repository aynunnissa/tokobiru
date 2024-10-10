import Navbar from "@/components/Navbar";
import styles from "./page.module.scss"
import ProductSearch from "@/features/product/ProductSearch";

async function GetProducts() {
  try {
    const response = await fetch('https://my-json-server.typicode.com/aynunnissa/tokobiru-data/products');

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
    <div className="page">
      <Navbar />
      <div className={styles.main}>
        <ProductSearch data={products} />
      </div>
    </div>
  );
}
