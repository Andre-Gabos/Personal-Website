import React from "react";
import * as footerStyles from "../styles/footer.module.scss"

function Footer() {
  return (
    <footer>
      <a href="https://linkedin.com/in/andre-gabos" target="_blank">LinkedIn</a>
      <a href="https://twitter.com/andrevgabos" target="_blank">Twitter</a>
      <a href="https://github.com/Andre-Gabos" target="_blank">GitHub</a>

      <p className={footerStyles.copiright}>© 2021 André Gabos.</p>
    </footer>
  )
}

export default Footer;