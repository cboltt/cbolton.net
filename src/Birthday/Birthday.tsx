import Link from "../App/Link";
import styles from "./Birthday.module.scss";


export default function Birthday() {
  return (
    <div className={styles.Page}>
      <main className={styles.App}>
      
        <section className={styles.Content}>

        <div className={styles.Images}>
          <div className={styles.MarqueeContent}>
            <img src="https://i.imgur.com/qCwuezz.jpeg" alt="Chris" />
            <img src="https://i.imgur.com/9DyNcvJ.jpeg" alt="Chris" />
            <img src="https://i.imgur.com/PpGod3N.jpeg" alt="Chris" />
            <img src="https://i.imgur.com/E50gBkE.jpeg" alt="Chris" />
          </div>
        </div>

        <h2>
          Your goodest boy is turning 28!
        </h2>

        <p>Come hang out on <strong>May 17th</strong> to celebrate my upcoming birthday. </p>

        <p>
          We've got an 8pm reso for drinks and snacks at <Link url="https://maps.app.goo.gl/CvbvSgWdg3Lz4gQ96" label="Bar Louise"/>, but if it's nice out, we'll have an earlier picnic in Prospect Park instead.
        </p>

        <p>
          After, some of us will be going back to our place and then on to the <Link url="https://dice.fm/event/nvqbb8-taurus-hoedown-brux-hardcandy-silkyblack-17th-may-house-of-yes-new-york-city-tickets" label="Taurus Hoedown"/> at <Link url="https://maps.app.goo.gl/AJfYHnrqfto9N8Yo6" label="House of Yes"/>. If you'd like to join, grab a ticket!
        </p>




        </section>

      </main>
    </div>
  );
}
