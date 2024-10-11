import styles from './navbar.module.scss'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Skeleton from '../Skeleton';
import DemoCart from './DemoCart';

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
            <DemoCart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;