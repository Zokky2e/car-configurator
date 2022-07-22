const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export function useDate(date: Date) {
  const dateMonth = month[date.getMonth()];
  const dateDay = `${
    date.getDate() +
    (["", "st", "nd", "rd"][
      (date.getDate() / 10) % 10 ^ 1 && date.getDate() % 10
    ] || "th")
  }`;
  const dateYear = date.getFullYear();
  return `${dateMonth} ${dateDay} ${dateYear}`;
}
