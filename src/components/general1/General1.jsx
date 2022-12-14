import styles from "./General1.module.scss";
const General1 = ({setDisplay}) => {
  return (
    <div>
      <div className={styles.info_intro}>
        <p>General Info On Scrybe</p>
      </div>

      <div className={styles.articles_cont}>
        <div className={styles.articles_wrapper}>
          <h3 onClick={()=> setDisplay(false)}>Guide: Signing Up for Scrybe</h3>
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
    </div>
  );
};

export default General1