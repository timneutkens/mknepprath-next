import React from "react";
import Link from "next/link";

import styles from "./card.css";

export default ({ description, href, imgSrc, label }) => (
  <Link href={href} key={label}>
    <a className={styles.card} rel="noopener" target="_blank">
      {imgSrc ? <img alt={label} className={styles.img} src={imgSrc} /> : null}
      <div>
        <h3>
          {label} <span className={styles.arrow}>&rarr;</span>
        </h3>
        <p>{description}</p>
      </div>
    </a>
  </Link>
);
