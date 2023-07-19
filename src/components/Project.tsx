/* eslint-disable @next/next/no-img-element */
import { Link } from 'lucide-react';
import * as React from 'react';
import {
  SiAndroid,
  SiCss3,
  SiHarmonyos,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMicrosoftazure,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
} from 'react-icons/si';

type Props = any;

export default function ProjectCard(props: Props) {
  const skillSize = 30;
  return (
    <div className='max-w-xs rounded-xl bg-gray-900 px-6 py-4 transition-all duration-200 ease-out hover:scale-105 hover:cursor-pointer  '>
      <img alt='huawei' className='w-32  object-contain' src='/huawei.png' />
      <h1 className='mt-2 text-lg'>Huawei AppGallery Newsletter</h1>
      <a
        href='#'
        className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600'
      >
        <Link size={15} />
        appgallerymea.com
      </a>
      <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
      </p>
      <div className='mt-2 flex flex-wrap'>
        <SiNextdotjs className='m-2' size={skillSize} />
        <SiMui className='m-2' size={skillSize} />
        <SiReact className='m-2' size={skillSize} />
        <SiAndroid className='m-2' size={skillSize} />
        <SiHarmonyos className='m-2' size={skillSize} />
        <SiHtml5 className='m-2' size={skillSize} />
        <SiCss3 className='m-2' size={skillSize} />
        <SiKotlin className='m-2' size={skillSize} />
        <SiJavascript className='m-2' size={skillSize} />
        <SiMicrosoftazure className='m-2' size={skillSize} />
        <SiNodedotjs className='m-2' size={skillSize} />
      </div>
      <a
        href='#'
        className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600'
      >
        learn more
        <span
          aria-hidden='true'
          className='block transition-all group-hover:ms-0.5 rtl:rotate-180'
        >
          &rarr;
        </span>
      </a>
    </div>
  );
}
