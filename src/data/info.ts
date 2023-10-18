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
  introduction: `I'm a software engineer specializing in full stack mobile development with a strong background in web development.</br>
  Proficient in Kotlin, Java, React-Native, and various web frameworks and libraries.</br>
  Successfully delivered 30+ Mobile and Web projects.</br>
  Capable of automating processes using Node.js to save time and improve efficiency.</br>
  Skilled at collaborating with cross-functional teams to deliver high-quality code and applications.</br>
  <p class="text-lime-500">#open_to_work</p>`,
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
