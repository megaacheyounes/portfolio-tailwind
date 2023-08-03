import { HiMail, HiPhone } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

type Props = any;

const LINKS = [
  {
    icon: HiPhone,
    href: '#1',
  },
  {
    icon: HiMail,
    href: 'emailto:younes.megaache@gmail.com',
  },
  {
    icon: SiGithub,
    href: '#2',
  },
  {
    icon: SiLinkedin,
    href: '#3',
  },
];

export default function Brands(props: Props) {
  return (
    <div className='my-4 gap-4 '>
      <div className='    '>
        <div className='grid grid-cols-2 gap-6 rounded-lg  '>
          <img className='h-20' src='/huawei.png' />
          <img className='h-20' src='/huawei.png' />
          <img className='h-20' src='/huawei.png' />
          <img className='h-20' src='/huawei.png' />
          <img className='h-20' src='/huawei.png' />
        </div>
      </div>
    </div>
  );
}
