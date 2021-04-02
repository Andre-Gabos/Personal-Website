import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { container, overlay, img } from "../styles/front.module.scss";

function Front() {
  return (
    <div className={container}>
      <StaticImage
        className={img}
        alt=""
        src={
          "../images/Hero.jpg"
        }
      />
      <div className={overlay}>
        <h1>I'm André</h1>
        <h2>a Web Developer</h2>
      </div>
    </div>
  )
}

export default Front;