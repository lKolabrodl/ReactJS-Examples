export default function dateFormat(time) {
  const d = new Date(time);
  const twoDate = (digit) => ("0" + digit).slice(-2);
  return [
    twoDate(d.getDate()),
    twoDate(d.getMonth() + 1),
    d.getFullYear(),
  ].join(".");
}
