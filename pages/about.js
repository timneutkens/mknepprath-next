import Head from "next/head";

import Page from "core/page";

import styles from "./about.css";

export default () => (
  <Page className={"container"}>
    <Head>
      <title key="title">About Michael Knepprath</title>
    </Head>

    <article>
      <header>
        <h1>About</h1>
      </header>

      <img
        alt="A photo of Michael Knepprath"
        className={styles.photo}
        src="/static/about.jpg"
      />

      <p>
        Michael Knepprath is a Software Engineer at{" "}
        <a href="https://www.walmartlabs.com" target="_blank">
          Walmart Labs
        </a>
        . He loves the point at which technology and art converge: technology,
        design, film, video games, and so on.
      </p>

      <h3>Contact</h3>
      <p>
        You can contact him via{" "}
        <a href="mailto:michael@mknepprath.com">email</a> or send a message on{" "}
        <a href="https://twitter.com/mknepprath" target="_blank">
          Twitter
        </a>
        .
      </p>
    </article>
  </Page>
);
