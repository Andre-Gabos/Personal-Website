import React from "react";
import { Link } from "gatsby";
import Front from "../Components/Front";
import Profile from "../Components/Profile";
import Project from "../Components/Project";
import Cta from "../Components/Cta";
import Layout from "../Components/Layout";
import projectInfo from "../Components/Info/project_info.js";

function Home() {
  return (
    <Layout>
      <Front />
      <Profile />
      <hr />
      <div>
        <h2>Projects</h2>
        <h3>These are a couple of my projects, to see more click <Link className="prLink" to="/projects" >here</Link>.</h3>
        {projectInfo
          .filter((item, index) => index < 2)
          .map(({ id, img, title, description, ghlink, wplink }) => {
            return (
              <div>
                <Project
                  key={id}
                  img={img}
                  title={title}
                  description={description}
                  ghlink={ghlink}
                  wplink={wplink}
                />
                <hr />
              </div>
            )
          })}
      </div>
      <Cta />
    </Layout>
  )
}

export default Home;