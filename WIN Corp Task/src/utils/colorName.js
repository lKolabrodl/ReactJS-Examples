//фу-я конверта логина в rgba
export default function charCode(userMail) {
  //убираем все до @
  let email = userMail.split("@")[0];
  let byfferArr = [];

  //перебор строки преобразуем в чар
  for (let i = 0; i < email.length; i++) {
    byfferArr.push(email.charCodeAt(i));
  }

  let result = byfferArr.join("");
  //если ник меньше 3 символов добавляем черный
  if (result.length <= 2) {
    result = result + "0000000";
  }

  if (result.length > 6) {
    result = result.substring(0, 6);
  }

  //конверт чаров в цвет rga
  function rgbaConvert(hex_color) {
    let r = hex_color >> 16;
    let g = (hex_color & 0xff00) >> 8;
    let b = hex_color & 0xff;
    r = (r * 100) / 256;
    g = (g * 100) / 256;
    b = (b * 100) / 256;

    return `rgba(${r},${g},${b},0.3)`;
  }

  return rgbaConvert(result);
}
