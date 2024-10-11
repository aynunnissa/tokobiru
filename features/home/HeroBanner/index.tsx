import styles from "./heroBanner.module.scss";
import InfiniteCarousel from "@/components/CarouselTemp/InifiniteCarousel";

type IBanner = {
  id: number,
  src: string,
  alt_image: string
}

type IRes = {
  banners: Array<IBanner>
}

const HeroBanner = ({ banners }: IRes) => {
  return (
    <div className={styles.hero__wrapper}>
      <InfiniteCarousel banners={banners} />
    </div>
  )
}

export default HeroBanner;