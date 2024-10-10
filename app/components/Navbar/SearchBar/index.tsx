import Image from 'next/image';
import styles from './searchBar.module.scss';
import SearchIcon from '@/public/icons/search.svg';

const SearchBar = () => {
  return(
    <form className={styles.form}>
      <div className={styles.searchbar}>
        <div className={styles['searchbar__input-wrapper']}>
          <input className={styles['searchbar__input-field']} type="text" placeholder='Cari di Tokobiru' aria-label='Cari di Tokobiru' />
        </div>
      </div>
      <button type='button' className={styles.form__button}>
        <Image src={SearchIcon} alt='Search product' width={15} height={15} />
      </button>
    </form>
  )
}

export default SearchBar;