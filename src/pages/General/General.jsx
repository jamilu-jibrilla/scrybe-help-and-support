import Header from "../../components/header/Header";
import HelpSupportNav from "../../components/help-support-nav/HelpSupportNav";
import styles from "./General.module.scss";

function General() {
  return (
    <div>
      <Header />
      <div className={styles.general}>
        
       <HelpSupportNav />

        <div className={styles.info_intro}>
          <p>General Info On Scrybe</p>
        </div>

        <div className={styles.articles_cont}>
          <div className={styles.articles_wrapper}>
            <h3>Guide: Signing Up for Scrybe</h3>
            <h3>Guide: Who can use scrybe?</h3>
            <h3>Guide: How Accurate is the Transcriptor? </h3>
            <h3>Guide: Monitoring your employees data </h3>
            <h3>Article: How to get your downloads in real time</h3>
          </div>
        </div>

        <div className={styles.info_intro2}>
          <img src="/info-circle.svg" alt="info circle" />
          <p>Promoted Articles</p>
        </div>

        <div className={styles.articles_cont}>
          <div className={styles.articles_wrapper}>
            <h3>Article: Transcription v Automated Transcription</h3>
            <h3>Guide: How to login and sign up</h3>
            <h3>Article: Placing a rush transcription Order </h3>
            <h3>Guide: Monitoring your employees data </h3>
            <h3>Article: How to get your downloads in real time</h3>
          </div>
        </div>

        <div className={styles.contact}>
          <p>Can't find an answer to your question?</p>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default General;
