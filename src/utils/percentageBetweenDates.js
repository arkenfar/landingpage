export default function getPercentageBetweenDates(startDate, endDate) {
  var start = new Date(startDate),
    end = new Date(endDate),
    today = new Date(),
    result = Math.round(((today - start) / (end - start)) * 100) + "%";

  return result;
}
