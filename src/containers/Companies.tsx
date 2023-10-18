import BrandsSwiper from '@/components/BrandsSwiper';
import Section from '@/containers/Section';

export default function Companies() {
  return (
    <Section
      elevated={true}
      title=' Brands I have collaborated with:  '
      className='bg-b-dark overflow-x-hidden'
    >
      <div className='flex  flex-col place-items-start justify-items-start '>
        <div className='mx-auto max-w-screen-xl pt-4  '>
          <h2 className='text-xl font-medium    '></h2>
          <div className=' mt-4    '>
            <BrandsSwiper />
          </div>
        </div>
      </div>
    </Section>
  );
}
