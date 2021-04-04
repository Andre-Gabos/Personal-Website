import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as profStyles from "../styles/profile.module.scss";

function Profile() {
  return (
    <div className={profStyles.profile}>
      <StaticImage src="../images/AndreCProfileCrop_200x200.jpg" alt="profile-pic" />
      <h2>Hello.</h2>
      <p class="prof-text">I'm a Front-end Web Developer, graduated Psychologist and behavioral analyst, and my goal is to build 
      relevant software, which has the potential to contribute to the well-being and practicality of people's lives</p>
    </div>
  )
}

export default Profile;