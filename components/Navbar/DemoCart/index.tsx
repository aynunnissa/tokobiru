import Image from 'next/image';
import CartIcon from '@/public/icons/cart.svg'

const DemoCart = () => {
  return(
    <div>
      <h1>
        <Image src={CartIcon} alt="Cek keranjang belanja" width={25} height={25} />
      </h1>
    </div>
  )
}

export default DemoCart;