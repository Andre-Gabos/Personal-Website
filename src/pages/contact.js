import React from "react";
import Layout from "../Components/Layout";
import * as ctaStyles from "../styles/cta.module.scss";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <h2>Contact</h2>
        <h3>I'm currently available for projects.</h3>
        <p>If you'd like to talk about projects, work or a subject related to that, reach me trough my email: andre.gabos@gmail.com.
        Otherwise, I'm also available in the social media linked below.</p>
        <p>Use the button below if you want to send me an e-mail or click one of the links to access my profile on LinkedIn, Twitter or GitHub.</p>
        <a className={ctaStyles.btn} href="mailto:andre.gabos@gmail.com">CONTACT ME</a>
      </div>
    </Layout>
  )
}

export default Contact;