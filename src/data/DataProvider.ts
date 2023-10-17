import { PROJECTS } from '@/data/projects';
import { Experience } from '@/models/Experience';
import { Project } from '@/models/project';
import { parseMonthYear } from '@/utils/date';
import { CERTIFICATES } from './certificates';
import { EDUCATION } from './education';
import { EXPERIENCES, PRESENT } from './experiences';
import { PersonalInfo, PERSONAL_INFO, SOCIAL_LINKS } from './info';
import { SKILLS } from './skills';

class DataProvider {
  experiences = EXPERIENCES.map((experience) => {
    experience.duration = this.getDuration(experience);
    return experience;
  });

  get personalInfo() {
    return PERSONAL_INFO;
  }

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

  get projects() {
    return PROJECTS;
  }

  get projectYears() {
    return PROJECTS.map((p) => p.year)
      .filter((year, i, years) => years.indexOf(year) == i)
      .sort((a, b) => b - a);
  }

  get projectsByYear() {
    const projectsByYear: { [key: number]: Project[] } = {};
    this.projectYears.forEach((y: number) => {
      projectsByYear[y] = PROJECTS.filter((p) => p.year == y);
    });
    return projectsByYear;
  }

  get certificates() {
    return CERTIFICATES;
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
    const addS = (num: number) => (num > 1 ? 's' : '');

    return (
      (y > 0 ? `${y} yr${addS(y)}` : '') +
      ' ' +
      (m > 0 ? `${m} mo${addS(m)}` : '')
    );
  }

  mDiff(d1: Date, d2: Date) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
}
export default DataProvider;
