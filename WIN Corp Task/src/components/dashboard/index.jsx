import React, { useState, useEffect } from "react";
import fire from "../../servies/firebase";
import styles from "./index.module.scss";

import useChat from "../../hooks/useChat";
import Massage from "../massage";

const Dashboard = ({ user }) => {
  const [inputMassage, setInputMassage] = useState("");
  const { error, masessages } = useChat();

  // выход пользователя
  const handleLogout = () => {
    fire.auth().signOut();
  };

  // отправка сообщения в коллекцию сообщений ( пользователь, сообщение, и дата)
  const handleSubmit = (e) => {
    e.preventDefault();
    fire.firestore().collection("messages").add({
      time: Date.now(),
      message: inputMassage,
      user: user.email,
    });
  };
  // обращение по id и прокрутка чата до самом начала
  useEffect(() => {
    window.myWrapper.scrollTop = window.myWrapper.scrollHeight;
  });

  // проверяем не выда ли бд ошибку. отображаем контент
  return (
    <>
      {error ? (
        "Ошибка загрузки базы данных"
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p>
              Welcome, <b> {user.email}</b>{" "}
            </p>
            <button
              style={{ fontSize: 12 }}
              className="btn btn-danger"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
          <div className={styles.body} id="myWrapper">
            <Massage masessages={masessages} />
          </div>
          <div className={styles.footer}>
            <input
              type="text"
              value={inputMassage}
              onChange={(e) => setInputMassage(e.target.value)}
              className={styles.input + " form-control"}
              placeholder="Enter message"
            />
            <button
              onClick={handleSubmit}
              className="btn btn-primary"
              style={{ marginRight: 20 }}
            >
              Sign in
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
