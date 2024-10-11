import Navbar from "@/components/Navbar";
import styles from "./page.module.scss"
import Image from "next/image";
import currency from "@/utils/currency";
import ImageGallery from "@/components/CarouselTemp/ImageGallery";
import OtherProducts from "@/features/product-detail/OtherProducts";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

async function GetProductDetail(slug: string) {
  try {
    const [productDetailResp, productResp] = await Promise.all([
      fetch(`https://my-json-server.typicode.com/aynunnissa/tokobiru-data/products?slug=${slug}`),
      fetch('https://my-json-server.typicode.com/aynunnissa/tokobiru-data/products')
    ]);

    if (!productDetailResp.ok || !productResp) {
      throw new Error('Error when fetching data');
    }

    const productDetail = await productDetailResp.json();
    const products = await productResp.json();

    return {
      product: productDetail[0],
      products
    };
  } catch (error) {
    console.error(error);
    return {
      product: {},
      products: []
    };
  }
}

export default async function Home({ params }: Readonly<ProductPageProps>) {
  const { product, products } = await GetProductDetail(params.slug);
  
  if (!product || !products) return <p>Loading...</p>
  
  return (
    <div className="page">
      <Navbar />
      <div style={{ margin: '6rem 2rem 0 2rem'}}>
        <div className={styles.main}>
          <div className={styles.product__detail}>
            <div className={styles.product__gallery}>
              <div className={styles.product__images}>
                <div className={styles["product__images-show"]}>
                  <Image 
                    src={product.master_image} 
                    alt="" 
                    fill
                    style={{ objectFit: 'contain' }} 
                  />
                </div>
                <div className={styles["product__images-carousel"]}>
                  <ImageGallery slides={[product.master_image, product.master_image, product.master_image, product.master_image, product.master_image, product.master_image]} />
                </div>
              </div>
            </div>
            <div className={styles.product__information}>
              <h1>{product.name}</h1>
              <div className={styles.product__review}>
                <p><span>&#9733;</span> {product.rating}</p> | <p>{product.selling}</p>
              </div>
              <div className={styles.product__price}>
                <p className={styles["product__price-current"]}>{currency(product.is_discounted ? product.discounted_price : product.price)}</p>
                {
                  product.is_discounted && 
                  <div className={styles.product__discount}>
                    <p className={styles["price-discounted"]}>{currency(product.price)}</p>
                    <div className={styles["product__discount-label"]}>
                      {product.discount_percentage} OFF
                    </div>
                  </div>
                }
              </div>
              <div className={styles.product__description}>
                <p className={styles["product__description-title"]}>Tentang Produk</p>
                <p className={styles["product__description-content"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              </div>
              {/* <div className={styles.product__description}>
                <p className={styles["product__description-title"]}>Variasi Produk</p>
                
              </div> */}
              <div className={styles.product__actions}>
                <button>Beli Sekarang</button>
              </div>
              <hr className={styles.product__divider} />
              <div className={styles.product__report}>
                <p>Produk bermasalah? <span>Laporkan</span></p>
              </div>
            </div>
          </div>
          <div className={styles.others}>
            <OtherProducts data={products} />
          </div>
        </div>
      </div>
    </div>
  );
}
