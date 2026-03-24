export const termsMapping = (key, data) => {
  if (!key) return;
  const match = data.find((item) => {
    const slug = item.name_eng.toLowerCase().replace(/ /g, "-");
    return key === slug;
  });
  return match || key;
};

export const codeMapping = ({ key, data, field = "name" }) => {
  if (!key || !data) return;
  const match = data.find(
    (item) => key === item.code || key === item.slackId || key === item.id
  );
  if (!match) return key;
  if (field === "all") return match;
  if (field === "location") return match.location;
  return match.name;
};

export const dateConvert = (date, format) => {
  if (!date) return;
  const str = date.toString();
  const year = str.slice(0, 4);
  const month = str.slice(4, 6);
  const day = str.slice(6, 8);
  if (format === "year") return year;
  return `${year}-${month}-${day}`;
};
