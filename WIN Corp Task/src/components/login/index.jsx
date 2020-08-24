import React, { useState } from "react";
//БД
import fire from "../../servies/firebase";
//CSS
import styles from "./index.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ф-я для регистрации, проверка на строне fb
  const handlerSignUp = (e) => {
    e.preventDefault();
    // скидываем стейт ошибки
    setError("");
    // подключаем fb и регистрируем по документации, в случаи ошибки - отображаем её
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Signed Up");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
        setError(err.toString());
      });
  };
  // ф-я для входа, проверка на строне fb
  const handlerLogin = (e) => {
    e.preventDefault();
    // скидываем стейт ошибки
    setError("");
    // подключаем fb и пытаемся войти, в случаи ошибки - отображаем её
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Logged In");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
        setError(err.toString());
      });
  };

  // отправка формы = ф-ия входа, на конпку регистрации повесил клик.  если есть ошибка входа/рег-ии - отображаем
  return (
    <>
      <h3 className={styles.title}>Sign in / Registration</h3>
      <form className={styles.form} onSubmit={handlerLogin}>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
          />
        </div>

        <button className="btn btn-primary" style={{ marginRight: 20 }}>
          Sign in
        </button>

        <button onClick={handlerSignUp} className="btn btn-info">
          Registration
        </button>
        <hr />
        {error ? (
          <div className="alert alert-warning" role="alert">
            {error}
          </div>
        ) : null}
      </form>
    </>
  );
};

export default Login;
