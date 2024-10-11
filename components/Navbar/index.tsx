import Image from 'next/image';
import styles from './navbar.module.scss'
import SearchBar from './SearchBar';
import CartIcon from '@/public/icons/cart.svg'
import Link from 'next/link';

const Navbar = () => {
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link href="/" style={{ display: 'contents' }}>
              <h1>Tokobiru</h1>
            </Link>
          </div>
          <div className={styles.actions}>
            <SearchBar />
            <div>
              <h1>
                <Image src={CartIcon} alt="Cek keranjang belanja" width={25} height={25} />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;