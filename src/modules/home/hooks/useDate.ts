export function useDate(date: Date) {
  const dateMonth = date.getMonth() - 1;
  const dateDay = `${
    date.getDate() +
    (["", "st", "nd", "rd"][
      (date.getDate() / 10) % 10 ^ 1 && date.getDate() % 10
    ] || "th")
  }`;
  const dateYear = date.getFullYear();
  return `${dateMonth} ${dateDay} ${dateYear}`;
}
