import Card from "../card/Card";
import styles from "./Cards.module.scss";

const Cards = () => {
  return (
    <div className={styles.cards_style}>
      
      <div className={styles.info_intro}>
        <img src="/info-circle.svg" alt="info circle" />
        <p>Help topics</p>
      </div>

      <div className={styles.cards_holder}>
        <Card
          src="/general.svg"
          header="General"
          paragrapgh="Basic Articles that will help you get the most out of scribe"
        />
        <Card
          src="/account.svg"
          header="Account Management"
          paragrapgh="Learn how to manage your account and navigate through"
        />
        <Card
          src="/getting_started.svg"
          header="Getting Started"
          paragrapgh="Get information on how to upload your files"
        />
      </div>

      <div className={styles.cards_holder}>
        <Card
          src="/transcription.svg"
          header="Transcription"
          paragrapgh="Documentation about files supported
                        how long it takes to transcribe and more."
        />

        <Card
          src="/billing.svg"
          header="Billing"
          paragrapgh="How to create a paid subscription to offer
                        startup, growing and enterprise"
        />

        <Card
          src="/privacy.svg"
          header="Privacy"
          paragrapgh="Information regarding account information
                        and how we handle your data."
        />

      </div>

      <div className={styles.btn_container}>
        <button className={styles.transcribe_btn}>
          Start Transcribing Now
        </button>
      </div>
      
    </div>
  );
};

export default Cards;
