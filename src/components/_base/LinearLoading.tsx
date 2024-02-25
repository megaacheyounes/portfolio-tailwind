import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

const LinearLoading = (props: Props) => {
  return (
    <div
      className={twMerge(props.className, 'relative h-2   rounded-full     ')}
    >
      <div className='   animate-linearLoading  h-2 rounded-full bg-green-500  ' />
    </div>
  );
};

export default LinearLoading;
