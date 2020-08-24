import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <Link to="/">Github Search</Link>
      </div>
    </header>
  );
};

export default Header;
