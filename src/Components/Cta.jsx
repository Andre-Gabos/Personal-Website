import React from "react";
import * as ctaStyles from "../styles/cta.module.scss";

function Cta() {
  return (
    <div className={ctaStyles.contactMe}>
      <h2>Get In Touch</h2>
      <h3>Talk to me abour work or cool ideas.</h3>
      <p>Use the button below if you want to send me an e-mail or click one of the links to access my profile on LinkedIn, Twitter or GitHub.</p>
      <a className={ctaStyles.btn} href="mailto:andre.gabos@gmail.com">CONTACT ME</a>
    </div>
  )
}

export default Cta;