import React from "react";
import Front from "../Components/Front";
import Profile from "../Components/Profile";
import Cta from "../Components/Cta";
import Layout from "../Components/Layout";

function Home() {
  return (
    <div>
    <Layout>
      <Front />
      <Profile />
      <Cta />
    </Layout>
    </div>
  )
}

export default Home;