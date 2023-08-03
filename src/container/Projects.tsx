import ArrowLink from '@/components/ArrowLink';
import ProjectFeatured from '@/components/ProjectFeatured';
import Section from '@/container/Section';

type Props = {
  full?: boolean;
};

export default function Projects(props: Props) {
  const { full } = props;

  return (
    <Section
      indentation={true}
      elevated={false}
      title='projects'
      className='bg-b-light   mt-10  px-0  '
    >
      <h6 className='text-md text-white'>Some of my notable work</h6>

      <div className='mt-5 '>
        <ProjectFeatured />
      </div>
      <ArrowLink
        className='text-md ml-0 mt-10 pl-0  '
        title={'View all projects'}
        href='/home/projects'
      />
    </Section>
  );
}
