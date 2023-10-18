import { TechnologyType } from '@/models/Technology';

type Props = {
  technologies: TechnologyType[];
  size?: number;
};

export default function TechnologiesChips(props: Props) {
  return (
    <>
      <div className=' flex   flex-wrap text-3xl'>
        {props.technologies.map((technology) => {
          return (
            <div
              key={technology}
              className='mr-1 mt-1 rounded-full bg-lime-400/10 px-2 py-1 text-xs text-lime-300 md:mr-2 md:mt-2 md:px-3  md:text-sm '
            >
              {technology}
            </div>
          );
        })}
      </div>
    </>
  );
}
