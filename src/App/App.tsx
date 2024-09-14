import styles from "./App.module.scss";

import headerData from "../data/header.json";
import Bolt from "./Bolt";
import Link from "./Link";

export default function App() {
  return (
    <div className={styles.Page}>
      <main className={styles.App}>
        <section className={styles.Content}>
          <div className={styles.Bolt}>
            <Bolt />
          </div>
          <article className={styles.Intro}>
            <p>
              <strong>
                Hey there! My name is Chris and I'm a senior software engineer
                based in New York City.{" "}
              </strong>
              Currently, I'm building the web experience of Pinecone, a
              high-performance vector database for AI applications.
            </p>
            <p>
              I've been a member of world-class engineering teams since I was in
              high school. My most recent experiences include Microsoft (Teams),
              Twitter (Trust and Safety), and Shopify (Product Ops).
            </p>
            <p>If you're interested in working with me, please get in touch.</p>
            <nav className={styles.Nav} aria-label="Related sites">
              {headerData.links.map((link) => (
                <Link rel="me" key={link.url} {...link} />
              ))}
            </nav>
          </article>
        </section>
      </main>
    </div>
  );
}
