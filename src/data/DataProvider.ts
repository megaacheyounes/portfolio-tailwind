
import { parseMonthYear } from "@/lib/date";
import { CERTIFICATES } from "./certificates";
import { EDUCATION } from "./education";
import { Experience, EXPERIENCES, PRESENT } from "./experiences";
import { PersonalInfo, PERSONAL_INFO, SOCIAL_LINKS } from "./info";
import { INTERESTS } from "./interests";
import { APPS, WEBSITES } from "./projectsDummy";
import { SKILLS } from "./skills";


class DataProvider {
  constructor() { }

  experiences = EXPERIENCES.map((experience) => {
    experience.duration = this.getDuration(experience);
    return experience;
  });

  projectCollections = [
    {
      title: "Android",
      projects: APPS,
    },
    {
      title: "Web",
      projects: WEBSITES,
    },
  ];

  info: PersonalInfo = PERSONAL_INFO;

  get socialLinks() {
    return SOCIAL_LINKS;
  }

  get education() {
    return EDUCATION;
  }

  get skills() {
    return SKILLS;
  }

  get skillsSimplified() {
    return;
  }

  get websites() {
    return WEBSITES;
  }

  get apps() {
    return APPS;
  }

  get certificates() {
    return CERTIFICATES;
  }

  get interests() {
    return INTERESTS;
  }

  getDuration(experience: Experience) {
    let endDate;

    if (experience.end === PRESENT) {
      endDate = new Date();
    } else {
      endDate = new Date(parseMonthYear(experience.end));
    }

    const startDate = new Date(parseMonthYear(experience.start));

    let m = this.mDiff(startDate, endDate);
    let y = 0;

    if (m >= 12) {
      y = Math.floor(m / 12);
      m -= y * 12;
    }
    const addS = (num: number) => (num > 1 ? "s" : "");

    return (
      (y > 0 ? `${y} yr${addS(y)}` : "") +
      " " +
      (m > 0 ? `${m} mo${addS(m)}` : "")
    );
  }

  mDiff(d1: Date, d2: Date) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
}
export default DataProvider;
