import Image from 'next/image';
import styles from './navbar.module.scss'
import CartIcon from '@/public/icons/cart.svg'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Skeleton from '../Skeleton';

const SearchBar = dynamic(() => import('./SearchBar'),{
  ssr: false,
  loading: () => <Skeleton width='100%' height='2.5rem' />
})

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