import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Список фильмов</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Смотреть позже</Link>
            </li>
            <li>
              <Link to="/watched">Просмотренные</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                Поиск
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
