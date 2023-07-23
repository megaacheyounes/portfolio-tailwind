export type SocialLinks = {
  linkedIn: string;
  github: string;
  instagram: string;
};

export const SOCIAL_LINKS: SocialLinks = {
  linkedIn: "https://www.linkedin.com/in/megaache-younes",
  github: "https://github.com/megaacheyounes",
  //instagram is irrelevant and might be a bad idea to have in your online resume/portfolio
  instagram: "https://www.instagram.com/unis.meg",
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
}

export const PERSONAL_INFO: PersonalInfo = {
  firstName: "Younes",
  lastName: "Megaache",
  mainTitle: "Software Developer",
  titlePrefix: "Full Stack",
  titles: ["Android Developer", "Web Developer"],
  email: "megaache.younes$$gmail.com".split("").reverse(),
  phoneNumber: "+971557040589".split("").reverse(),
  shortIntroduction: "Younes MEGAACHE is open for new opportunities",
  introduction: `I'm an android and web developer located in Dubai, the UAE.
							<br/>
							I have a serious passion for developing software and
							mobile apps. Self-motivated, Wel-organized person,
							problem solver, well versed in multiple programing
							languages and web technologies.
              `,
  openToWork: true,
  openToRelocating: false,
  facts: [
    {
      quantity: 7,
      quantityPlus: false,
      caption: "YEARS OF EXPERIENCE",
    },
    {
      quantity: 30,
      quantityPlus: true,
      caption: "APPS AND WEBSITES",
    },
  ],
};
