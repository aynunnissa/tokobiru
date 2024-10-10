import currency from "@/utils/currency";
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard";
import styles from "./page.module.scss"

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <div style={{ marginTop: '100px' }}>
        <h1 className={styles.gogo}>Tokobiru</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {[1,2,3,4,5,6,7].map(val => <ProductCard 
            key={val}
            name="Jual Jaket Kulit PREMIUM buatan lokal"
            price={currency(300000)}
            image=""
            hasDiscount={true}
            discountPercent="50%"
            discountCaption="OFF"
            selling="1RB terjual"
            rating="4.7"
          />)}
        </div>
      </div>
    </div>
  );
}
