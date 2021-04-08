import React from "react";
import { Link } from "gatsby";
import * as headerStyles from "../styles/header.module.scss";

function Header() {
  return (
    <header>
      <Link className={headerStyles.logo} to="/">
        André Gabos
      </Link>

      <Link className={headerStyles.option} to="/about">
        ABOUT
        </Link>
      <Link className={headerStyles.option} to="/projects">
        PROJECTS
        </Link>
      <Link className={headerStyles.option} to="/contact">
        CONTACT
        </Link>

    </header>
  )
}

export default Header;