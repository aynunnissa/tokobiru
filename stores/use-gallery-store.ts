import { create } from 'zustand';

interface ProductDetailGalleryState {
  mainImage: string;
  setMainImage: (mainImage: string) => void;
  activeMediaId: number|null;
  setActiveMediaId: (mediaId: number|null) => void;
  activeVariantId: number|null;
  setActiveVariantId: (variantId: number|null) => void;
}


const useProductGallery = create<ProductDetailGalleryState>((set) => ({
  mainImage: '',
  setMainImage: (mainImage: string) => set({ mainImage }),
  activeMediaId: null,
  setActiveMediaId: (activeMediaId: number|null) => set({ activeMediaId }),
  activeVariantId: null,
  setActiveVariantId: (activeVariantId: number|null) => set({ activeVariantId })
}));

export default useProductGallery;
