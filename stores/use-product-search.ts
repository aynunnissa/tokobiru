import { create } from 'zustand';

interface ProductSearchState {
  keyword: string;
  setKeyword: (keyword: string) => void;
}


const useProductSearch = create<ProductSearchState>((set) => ({
  keyword: '',
  setKeyword: (keyword: string) => set({ keyword }),
}));

export default useProductSearch;
