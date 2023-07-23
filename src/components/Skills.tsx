import * as React from 'react';
import { HiMail, HiPhone } from 'react-icons/Hi';
import { SiAdobephotoshop, SiAngular, SiAngularjs, SiExpress, SiFirebase, SiGithub, SiGoogleplay, SiHuawei, SiJetpackcompose, SiLaravel, SiLinkedin, SiLinux, SiMongodb, SiPhp, SiSpringboot, SiSuse, SiTailwindcss, SiTypescript, SiWoocommerce, SiWordpress } from 'react-icons/si';
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
import { DiJava, DiAndroid } from 'react-icons/di';
import { TbBrandKotlin } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';

import { IconType } from 'react-icons/lib';
import { SkillType } from '@/models/project';
import { icons } from 'lucide-react';

type Props = {
  skills: SkillType[]
  size?: number
};

const MAPPING: { [key in SkillType]: IconType } = {
  "Android": DiAndroid,
  "HarmonyOS": SiHarmonyos,
  "Kotlin": TbBrandKotlin,
  "Java": FaJava,
  "React-Native": SiReact,
  "Huawei Mobile Services (HMS)": SiHuawei,
  "Firebase": SiFirebase,
  "JavaScript": SiJavascript,
  "CSS": SiCss3,
  "HTML": SiHtml5,
  "Laravel": SiLaravel,
  "PHP": SiPhp,
  "Node.js": SiNodedotjs,
  "Next.js": SiNextdotjs,
  "Express.js": SiExpress,
  "Google Play Services": SiGoogleplay,
  "Photoshop": SiAdobephotoshop,
  "Linux": SiLinux,
  "WordPress": SiWordpress,
  "MUI": SiMui,
  "Angular": SiAngularjs,
  "WooCommerce": SiWoocommerce,
  "TypeScript": SiTypescript,
  "MongoDB": SiMongodb,
  "React": SiReact,
  "Jetpack Compose": SiJetpackcompose,
  "Spring Boot": SiSpringboot,
  "Tailwind CSS": SiTailwindcss
};


const SVG_MAPPING: any = {
  "Android": "/skills/android.svg",
  "HarmonyOS": "/skills/harmonyos.png",
};


export default function Skills(props: Props) {

  const skills = [
    "/skills/android.svg",
    "/skills/java.svg",
    "/skills/harmonyos.png",
    "/skills/nextjs.svg"
  ]

  return (
    <>
      <div className=' flex   text-3xl flex-wrap'>
        {props.skills.map((skill) => {
          const Icon = MAPPING[skill]
          return (
            <div key={skill} className=" rounded-full bg-lime-400/10  text-lime-300 text-xs py-1 px-3 mt-2  mr-2 ">
              {skill}
            </div>
          )
        })}
      </div>
    </>
  );
}
