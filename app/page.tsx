import Navbar from "../components/Navbar"
import styles from "./page.module.scss"
import RecommendationSection from "../features/home/Recommendation";
import FlashSaleSection from "@/features/home/FlashSale";

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
        {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {[...Array(4)].map((num) => (
              <CardSkeleton
                key={`skeleton-${num}`}
              />
            ))}
        </div> */}
        <FlashSaleSection data={products.slice(0, 6)} />
        <RecommendationSection data={products} />
      </div>
    </div>
  );
}
