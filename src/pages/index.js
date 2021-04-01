import React from "react";
import Front from "../Components/Front";
import Header from "../Components/Header";
import Profile from "../Components/Profile";
import ContactMe from "../Components/ContactMe";
import Footer from "../Components/Footer";

function NewHome() {
  return (
    <div>
      <Header />
      <Front />
      <Profile />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default NewHome;