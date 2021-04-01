import React from "react";
import "../styles/style.css";

function Footer() {
  return (
    <div className="bottom">
        <a className="footer-link" href="www.linkedin.com/in/andre-gabos">LinkedIn</a>
        <a className="footer-link" href="https://twitter.com/andrevgabos">Twitter</a>
        <a className="footer-link last-link" href="https://github.com/Andre-Gabos">GitHub</a>
        
        <div className="icon-tag">
            Icons made by <a className="icon-link" href="https://www.freepik.com" title="Freepik">Freepik</a> from <a className="icon-link" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>

        <p className="copiright">© 2021 André Gabos.</p>
      </div>
  )
}

export default Footer;