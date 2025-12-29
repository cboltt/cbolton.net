import styles from "./App.module.scss";

import headerData from "../data/header.json";
import Link from "./Link";
import BoltGrid from "./BoltGrid";

export default function App() {
  return (
    <div className={styles.Page}>
      <div className={styles.BoltPanel}>
        <BoltGrid />
      </div>
      <main className={styles.App}>
        <article className={styles.Content}>
          <p>Hello 👋</p>
          <p>
            My name is Chris Bolton and I'm an engineering manager based in Los
            Angeles.
          </p>
          <p>
            I'm building the web experience of{" "}
            <Link inline url="https://www.pinecone.io" label="Pinecone" />, a
            high performance vector database for AI applications. I am also a
            Design and Technology Fellow at{" "}
            <Link
              inline
              url="https://www.faspe-ethics.org/about-us/"
              label="FASPE"
            />
            .
          </p>
          <p>
            With over a decade of product development experience, I take pride
            in building fast, accessible, and intuitive user interfaces.
          </p>
          <p>
            My most recent engineering roles have been at Microsoft (Teams),
            Twitter (Trust and Safety), and Shopify (Product Ops / Knowledge
            Management).
          </p>
          <p>If you're interested in working with me, please reach out:</p>
          <nav className={styles.Nav} aria-label="Related sites">
            {headerData.links.map((link) => (
              <Link inline rel="me" key={link.url} {...link} />
            ))}
          </nav>
        </article>
      </main>
    </div>
  );
}
