"use client";

import Image from 'next/image';
import styles from './searchBar.module.scss';
import SearchIcon from '@/public/icons/search.svg';
import { useRouter } from 'next/navigation';
import useProductSearch from '@/stores/use-product-search';
import { useState } from 'react';

const SearchBar = () => {
  const router = useRouter();
  const { setKeyword } = useProductSearch();
  const [ value, setValue ] = useState("");

  const handleSubmitSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    setKeyword(value);
    e.preventDefault();

    if (value) {
      router.push("/search");
    } else {
      router.push("/");
    }
    
  }

  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return(
    <form onSubmit={handleSubmitSearch} className={styles.form}>
      <div className={styles.searchbar}>
        <div className={styles['searchbar__input-wrapper']}>
          <input 
            className={styles['searchbar__input-field']} 
            type="text" 
            placeholder='Cari di Tokobiru' 
            aria-label='Cari di Tokobiru'
            onChange={handleInputChanged}
            value={value}
          />
        </div>
      </div>
      <button className={styles.form__button}>
        <Image src={SearchIcon} alt='Search product' width={15} height={15} />
      </button>
    </form>
  )
}

export default SearchBar;