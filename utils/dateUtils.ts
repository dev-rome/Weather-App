export const getDayOfTheWeek = (day: string): string => {
  const date = new Date(day);
  return date.toLocaleDateString("en-US", { weekday: "long" });
};
