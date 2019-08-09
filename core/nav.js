import classnames from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";

import { navLinks } from "data/links";

import styles from "./nav.css";

const Nav = ({ className }) => (
  <nav className={classnames(styles.nav, className)}>
    <a className={styles.siteLogo} href={"/"}>
      <img
        alt={"Michael Knepprath Memoji"}
        className={styles.img}
        src={"/static/memoji.png"}
      />
      <span>M. Knepprath</span>
    </a>
    <ul>
      {navLinks.map(({ href, key, title }) => (
        <li key={key}>
          <a href={href} rel="noopener noreferrer" target="_blank">
            {title}
          </a>
        </li>
      ))}
      {/* Internal links - we can use Next's Link here. */}
      <li>
        <Link href={"/writing"}>
          <a>Writing</a>
        </Link>
      </li>
      <li>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
      </li>
    </ul>
  </nav>
);

Nav.defaultProps = {
  className: ""
};

Nav.propTypes = {
  className: PropTypes.string
};

export default Nav;
