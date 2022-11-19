import { useState } from "react";
import Contact from "../../components/contact/Contact";
import General1 from "../../components/general1/General1";
import General2 from "../../components/general2/General2";
import Header from "../../components/header/Header";
import HelpSupportNav from "../../components/help-support-nav/HelpSupportNav";
import styles from "./General.module.scss";

function General() {
  const [display, setDisplay] = useState(true)
  
  return (
    <div>
      <Header />

      <div className={styles.general}>
        <HelpSupportNav setDisplay={setDisplay}/>

        {
        display ? 
        <General1 setDisplay={setDisplay} /> :
        <General2 />
        }

        <Contact />

      </div>
    </div>
  );
}

export default General;
