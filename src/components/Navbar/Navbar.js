import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbar__wrapper}>
          <span>
            <Link to="/">
              <i className="fa fa-tasks" />
            </Link>
          </span>
          <div className={styles.navbar__menu}>
            <ul className={styles.navbar__items}>
              <li className={styles.navbar__item}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.navbar__item}>
                <Link to="/favorite">Favorite</Link>
              </li>
              <li className={styles.navbar__item}>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
