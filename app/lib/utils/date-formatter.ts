export const dateFormatter = (date: Date | string | undefined): string => {
  if (!date) {
    return '';
  }

  const dateParts = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    hourCycle: 'h24',
    year: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Jerusalem',
  })
    .formatToParts(new Date(date))
    .reduce<Record<string, string>>((parts, part) => {
      parts[part.type] = part.value;
      return parts;
    }, {});

  const { weekday, month, day, year, hour, minute, second } = dateParts;

  return `${weekday}, ${day}-${month}-${year} ${hour}:${minute}:${second} UTC`;
};
