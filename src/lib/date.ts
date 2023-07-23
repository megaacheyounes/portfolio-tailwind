export const parseMonthYear = (monthYear: string) => {
  //add day to fix bug with FireFox
  return Date.parse(`1 ${monthYear}`);
};

export const getYearFromData = (monthYear: string) => {
  return new Date(parseMonthYear(monthYear)).getFullYear();
};
