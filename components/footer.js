import React from 'react'
import Link from 'next/link'

import TwitterIcon from '../components/icon-twitter'

import { footerLinks } from '../utils/links'

import styles  from './footer.css'

const Footer = () => (
  <nav className={styles.footer}>
    <p className={styles.siteLogo}>
      Created by Michael Knepprath •
      <Link href='https://github.com/mknepprath/mknepprath-next'>
        <a>View on GitHub</a>
      </Link>
    </p>
    <ul>
      <Link href='https://twitter.com/mknepprath'>
        <a
          aria-label='Twitter'
          className={styles.twitter}
        >
          <TwitterIcon />
        </a>
      </Link>
      {footerLinks.map(({ href, key, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Footer
