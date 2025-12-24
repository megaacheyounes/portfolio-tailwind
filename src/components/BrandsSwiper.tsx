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

export default function BrandsSwiper() {
  return (
    <div className="bg-gray-dark py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {BRANDS.map((brand) => (
            <div
              key={brand}
              className="col-span-1 flex justify-center"
            >
              <img
                className="max-h-12 w-full object-contain filter grayscale invert transition hover:brightness-200"
                src={brand}
                alt={brand.split('/')[2].split('.')[0]}
                width={158}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
