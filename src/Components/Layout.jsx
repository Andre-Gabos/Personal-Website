import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/index.scss";
import "@fontsource/merriweather"
import "@fontsource/montserrat"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;