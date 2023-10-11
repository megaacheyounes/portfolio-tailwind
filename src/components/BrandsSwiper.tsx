import InfiniteSwiper from '@/components/_base/InfiniteSwiper';

type Props = any;

const BRANDS = [
  '/brands/huawei.png',
  '/brands/emirates.png',
  '/brands/tawasal.png',
  '/brands/carrefour.png',
  '/brands/dubai-police.png',
  '/brands/steppi.png',
  '/brands/visit-abudhabi.png',
  '/brands/algebratec.png',
  '/brands/reel-cinemas.png',
  '/brands/dubai-sports.jpg',
];

export default function BrandsSwiper(props: Props) {
  const items = [...BRANDS, ...BRANDS];
  return (
    <>
      <div className='relative '>
        <InfiniteSwiper>
          {items.map((brand, index) => (
            <img
              key={'brand_' + index}
              alt={brand}
              className='h-12 w-44 object-contain object-center  px-8 '
              src={brand}
            />
          ))}
        </InfiniteSwiper>
      </div>
    </>
  );
}
