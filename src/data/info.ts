export type SocialLinks = {
  linkedIn: string[];
  github: string[];
  phone: string[];
  email: string[];
};

export const SOCIAL_LINKS: SocialLinks = {
  linkedIn: 'https://www.linkedin.com/in/megaache-younes'.split(''),
  github: 'https://github.com/megaacheyounes'.split(''),
  phone: ['+971', '557040589'],
  email: ['megaache.younes', 'gmail.com'],
};

export interface Fact {
  quantity: number;
  quantityPlus: boolean;
  caption: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  mainTitle: string;
  titlePrefix: string;
  titles: string[];
  email: string[];
  phoneNumber: string[];
  shortIntroduction: string;
  introduction: string;
  openToWork: boolean;
  openToRelocating: boolean;
  //two facts max
  facts: Fact[];
  codewarsLink?: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  firstName: 'Younes',
  lastName: 'Megaache',
  mainTitle: 'Software Developer',
  titlePrefix: 'Full Stack',
  titles: ['Android Developer', 'Web Developer'],
  email: SOCIAL_LINKS.email,
  phoneNumber: SOCIAL_LINKS.phone,
  shortIntroduction: 'Younes MEGAACHE is open for new opportunities',
  introduction: `
   Results-driven Software Engineer specializing in full-stack mobile and web development.<br>
  Successfully delivered 30+ Mobile and Web projects.
  <br>
  Proficient in Kotlin, Java, React-Native, HarmonyOS and a wide range of web technologies and frameworks.
  <br>
  Automated development processes with Node.js, reducing manual effort and improving productivity.
  <br>
  Skilled in mobile app reverse engineering and static analysis for troubleshooting and enhancing security.
  <br>
  Passionate about building scalable solutions that solve real-world problems.
  <br>
  Collaborative team player dedicated to delivering high-quality applications.
  <br>
  
  <br><p class="text-lime-500">#open_to_work #open_to_relocation</p>  
  `,
  openToWork: true,
  openToRelocating: false,
  codewarsLink: 'https://www.codewars.com/users/YounesMegaache/',
  facts: [
    {
      quantity: 7,
      quantityPlus: false,
      caption: 'YEARS OF EXPERIENCE',
    },
    {
      quantity: 30,
      quantityPlus: true,
      caption: 'APPS AND WEBSITES',
    },
  ],
};
