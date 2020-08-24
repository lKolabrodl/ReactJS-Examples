import React from "react";
import styles from "./main.module.scss";
import SearchForm from "../../components/searchForm";

const Main = () => {
  return (
    <section className={styles.main}>
      <div className="wrapper">
        <SearchForm />
      </div>
    </section>
  );
};

export default Main;
