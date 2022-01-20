import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ''
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.navbar__item}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ''
                  }
                  to="/favorite"
                >
                  Favorite
                </NavLink>
              </li>
              <li className={styles.navbar__item}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ''
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
