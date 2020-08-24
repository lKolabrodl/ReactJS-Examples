import React from "react";
import styles from "./index.module.scss";
//ф-ия преобразующее ник в char, а из него в rgba
import colorName from "../../utils/colorName";
// ф-ия перевода милисекунд во время
import timeMassage from "../../utils/timeMassage";

const Massage = ({ masessages }) => {
  //сортировка сообщений по времени
  const sortMasessages = masessages.sort((a, b) => {
    if (a.time > b.time) return 1;
    else if (a.time < b.time) return -1;
    else return 0;
  });

  // распаковка сообщений, цвет сообщений по нику пользователя
  return (
    <>
      <ul className={styles.ul}>
        {sortMasessages.map((msg) => (
          <li
            key={msg.id}
            style={{ backgroundColor: `${colorName(msg.user)}` }}
          >
            <span>{msg.user}</span>:<p>{msg.message}</p>
            <small>{timeMassage(msg.time)}</small>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Massage;
