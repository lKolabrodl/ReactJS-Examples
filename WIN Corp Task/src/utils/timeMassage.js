//перевод милисекнды в часы/ минуты
export default function timeMassage(time) {
  let minutes = parseInt((time / (1000 * 60)) % 60);
  let hours = parseInt((time / (1000 * 60 * 60)) % 24);
  //UTC+3
  let UTC = 3;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + UTC + ":" + minutes;
}
