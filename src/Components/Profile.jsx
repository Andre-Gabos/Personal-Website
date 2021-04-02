import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as profStyles from "../styles/profile.module.scss";

function Profile() {
  return (
    <div className={profStyles.profile}>
      <StaticImage className={profStyles.image} src="../images/AndreCProfileCrop_200x200.jpg" alt="profile-pic" />
      <h2>Hello.</h2>
      <p class="prof-text">I've been working as a clinical psychologist for two years, treating people of all ages through behavior analysis.
            I am also a web developer with experience in HTML5, CSS3 and JavaScript.</p>
    </div>
  )
}

export default Profile;