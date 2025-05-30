import styles from "./App.module.scss";

import headerData from "../data/header.json";
import Bolt from "./Bolt";
import Link from "./Link";

export default function App() {
  return (
    <div className={styles.Page}>
      <main className={styles.App}>
        <section className={styles.Content}>
          <article className={styles.Intro}>
            <p>
              <strong>
                Hey there! My name is Chris and I'm a staff software engineer
                based in New York City.{" "}
              </strong>
             
            </p>
            <p>I'm building the web experience of <Link url="https://www.pinecone.io" label="Pinecone"/>, a
            high-performance vector database for AI applications. I am also a Design and Technology Fellow at <Link url="https://www.faspe-ethics.org/about-us/" label="FASPE"/>.</p>
            <p>
             With over a decade of product development experience, I take pride in building fast, accessible, and intuitive user interfaces.</p>
            <p>My most recent engineering roles have been at Microsoft (Teams),
              Twitter (Trust and Safety), and Shopify (Product Ops / Knowledge Management).
            </p>
            <p>If you're interested in working with me, please reach out.</p>
            <nav className={styles.Nav} aria-label="Related sites">
              {headerData.links.map((link) => (
                <Link rel="me" key={link.url} {...link} />
              ))}
            </nav>
          </article>
          <div className={styles.Bolt}>
            <Bolt />
          </div>
        </section>
      </main>
    </div>
  );
}
