export default function durationFunc(time) {
  let hours = Math.round(time / 60);
  let minutes = time % 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}ч : ${minutes}м`;
}
