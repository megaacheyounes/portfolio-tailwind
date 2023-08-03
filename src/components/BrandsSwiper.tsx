import ContSwiper from '@/components/ContSwiper';
type Props = any;

const BRANDS = [
  '/brands/huawei.png',
  '/brands/algebratec.png',
  '/brands/tawasal.png',
  '/brands/carrefour.png',
  '/brands/dubai-police.png',
  '/brands/reel-cinemas.png',
  '/brands/dubai-sports.jpg',
  '/brands/emirates.png',
  '/brands/steppi.png',
  '/brands/visit-abudhabi.png',
];

export default function BrandsSwiper(props: Props) {
  const items = BRANDS.map((brand) => (
    <img
      key={brand}
      className='   h-10 w-full   object-contain object-center md:h-10  '
      src={brand}
    />
  ));

  return (
    <>
      <div className='relative '>
        <ContSwiper duration={2000} itemWidth={300} items={items}></ContSwiper>
      </div>
    </>
  );
}
