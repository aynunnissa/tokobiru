import RecommendationSection from "../features/home/Recommendation";
import FlashSaleSection from "@/features/home/FlashSale";
import HeroBanner from "@/features/home/HeroBanner";
import { BASE_URL } from "@/lib/client";
import PageLayout from "./PageLayout";

async function getServerSideData() {
  try {
    const [bannerResp, flashSaleResp, productsResp] = await Promise.all([
      await fetch(`${BASE_URL}/banners`),
      await fetch(`${BASE_URL}/flashsale`),
      await fetch(`${BASE_URL}/products`)
    ])

    if (!bannerResp.ok || !flashSaleResp.ok || !productsResp.ok) {
      throw new Error('Cannot get homepage data');
    }

    const banners = await bannerResp.json();
    const flashSaleProducts = await flashSaleResp.json();
    const products = await productsResp.json();
    return {
      banners,
      flashSaleProducts,
      products
    }
  } catch (error) {
    console.log(error);
    return {
      banners: [],
      flashSaleProducts: [],
      products: []
    }
  }
}

export default async function Home() {
  const {banners, flashSaleProducts, products} = await getServerSideData();

  return (
    <PageLayout>
      <div>
        <HeroBanner banners={banners} />
        <FlashSaleSection data={flashSaleProducts} />
        <RecommendationSection data={products} />
      </div>
    </PageLayout>
  );
}
