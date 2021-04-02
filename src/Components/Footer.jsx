import React from "react";
import * as footerStyles from "../styles/footer.module.scss"

function Footer() {
  return (
    <footer>
      <a href="https://linkedin.com/in/andre-gabos">LinkedIn</a>
      <a href="https://twitter.com/andrevgabos">Twitter</a>
      <a href="https://github.com/Andre-Gabos">GitHub</a>

      <p className={footerStyles.copiright}>© 2021 André Gabos.</p>
    </footer>
  )
}

export default Footer;