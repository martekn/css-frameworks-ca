export const getTimeSince = (createdDate) => {
  const date = new Date();
  createdDate = new Date(createdDate);

  const dateObj = {
    day: createdDate.getDate(),
    month: createdDate.getMonth(),
    year: createdDate.getFullYear(),
    hour: createdDate.getHours(),
    minute: createdDate.getMinutes(),
    second: createdDate.getSeconds(),
  };

  if (dateObj.year != date.getFullYear() || dateObj.month != date.getMonth() || dateObj.day != date.getDate()) {
    const difference = date.getTime() - createdDate.getTime();
    return `${Math.floor(difference / (1000 * 3600 * 24))}d`;
  } else {
    if (date.getHours() - Number(dateObj.hour) > 0) {
      return `${date.getHours() - Number(dateObj.hour)}h ago`;
    } else if (date.getMinutes() - Number(dateObj.minute) > 0) {
      return `${date.getMinutes() - Number(dateObj.minute)}min ago`;
    } else {
      return "Just now";
    }
  }
};
