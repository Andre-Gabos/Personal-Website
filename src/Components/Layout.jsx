import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/index.scss";
import "@fontsource/merriweather";
import "@fontsource/montserrat";
import "@fontsource/caveat";
import "@fontsource/dancing-script";

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