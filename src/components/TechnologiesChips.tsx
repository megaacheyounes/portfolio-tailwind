import { DiAndroid } from 'react-icons/di';
import { FaJava } from 'react-icons/fa';
import {
  SiAdobephotoshop,
  SiAngularjs,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGoogleplay,
  SiHarmonyos,
  SiHtml5,
  SiHuawei,
  SiJavascript,
  SiJetpackcompose,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiWoocommerce,
  SiWordpress,
} from 'react-icons/si';
import { TbBrandKotlin } from 'react-icons/tb';

import { TechnologyType } from '@/models/Technology';
import { IconType } from 'react-icons/lib';

type Props = {
  technologies: TechnologyType[];
  size?: number;
};

const MAPPING: { [key in TechnologyType]: IconType } = {
  Android: DiAndroid,
  HarmonyOS: SiHarmonyos,
  Kotlin: TbBrandKotlin,
  Java: FaJava,
  'React-Native': SiReact,
  'Huawei Mobile Services (HMS)': SiHuawei,
  Firebase: SiFirebase,
  JavaScript: SiJavascript,
  CSS: SiCss3,
  HTML: SiHtml5,
  Laravel: SiLaravel,
  PHP: SiPhp,
  'Node.js': SiNodedotjs,
  'Next.js': SiNextdotjs,
  'Express.js': SiExpress,
  'Google Play Services': SiGoogleplay,
  Photoshop: SiAdobephotoshop,
  Linux: SiLinux,
  WordPress: SiWordpress,
  MUI: SiMui,
  Angular: SiAngularjs,
  WooCommerce: SiWoocommerce,
  TypeScript: SiTypescript,
  MongoDB: SiMongodb,
  React: SiReact,
  'Jetpack Compose': SiJetpackcompose,
  'Spring Boot': SiSpringboot,
  'Tailwind CSS': SiTailwindcss,
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