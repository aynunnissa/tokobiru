import Navbar from "./components/Navbar"
import styles from "./page.module.scss"

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <div style={{ marginTop: '100px' }}>
        <h1 className={styles.gogo}>Tokobiru</h1>
      </div>
    </div>
  );
}
