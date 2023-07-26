
import TestimonialItem from '@/components/Testimonial';
import Section from '@/container/Section';
import DataProvider from '@/data/DataProvider';



export default function Testimonials() {

  const data = new DataProvider()

  return (
    <Section elevated={true} title='Testimonials' className='bg-b-dark    '>

      <TestimonialItem />
      <TestimonialItem />
      <TestimonialItem />

    </Section>
  )
}



