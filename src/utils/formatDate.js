export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (date, time) => {
  if (!date) return "Not Added";

  date = new Date(date);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  let formattedDate = `${day} ${month} ${year}`;

  if (time) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    formattedDate += " at " + strTime;
  }

  return formattedDate;
};
