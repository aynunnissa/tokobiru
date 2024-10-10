export default function currency(price: number) {
  const displayPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price);

  return displayPrice.replace(/Rp\s*/, 'Rp').replace(/,00$/, '');
}
