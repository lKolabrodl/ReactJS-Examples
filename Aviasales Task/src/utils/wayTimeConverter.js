export default function splitTimeOut(date, duration) {
  let [, time] = date.slice(0, -1).split("T");
  let [h, m] = time.split(":");
  let sum = Number(h) * 60 + Number(m) + duration;
  let newH = sum / 60 >= 24 ? Math.floor(sum / 60 - 24) : Math.floor(sum / 60);
  let newM = sum % 60;
  let formH = newH < 10 ? `0${newH}` : newH;
  let formM = newM < 10 ? `0${newM}` : newM;

  return `${h}:${m} - ${formH}:${formM}`;
}
