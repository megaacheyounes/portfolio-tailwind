import { HiMail, HiPhone } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import ProtectedIconButton from '@/components/IconButton';
import DataProvider from '@/data/DataProvider';
import { twMerge } from 'tailwind-merge';

type Props = {
  large?: boolean;
  className?: string;
  static?: boolean;
};

export default function Socials(props: Props) {
  const { large = false } = props;
  const info = new DataProvider().socialLinks;
  const LINKS = [
    {
      icon: HiPhone,
      href: info.phone,
    },
    {
      icon: HiMail,
      href: info.email,
    },
    {
      icon: SiGithub,
      href: info.github,
      newTab: true,
    },
    {
      icon: SiLinkedin,
      href: info.linkedIn,
      newTab: true,
    },
  ];

  const getIcons = () =>
    LINKS.map((link, index) => {
      const Icon = link.icon;
      return (
        <ProtectedIconButton
          className='p-1  shadow-lime-500/50 transition-all duration-300 hover:-translate-y-1   hover:shadow-xl'
          newTab={link.newTab}
          key={link.href.join('')}
          href={link.href}
        >
          <Icon size={20} />
        </ProtectedIconButton>
      );
    });

  if (props.static) {
    return (
      <div
        className={
          ' flex w-10  flex-col place-items-center justify-center gap-1 text-white  '
        }
      >
        {getIcons()}
        <span className='h-20 w-[2px] bg-white '></span>
      </div>
    );
  }
  return (
    <div
      className={twMerge(
        '  mx-1 flex flex-row gap-1  text-white',
        large && 'mx-2',
        props.className
      )}
    >
      {/* {LINKS.map((link, index) => {
        const Icon = link.icon;
        return (
          <IconButton newTab={link.newTab} key={link.href} href={link.href}>
            <Icon size={large ? 30 : 18} />
          </IconButton>
        );
      })} */}
      {getIcons()}
    </div>
  );
}
