import React from "react";
import Front from "../Components/Front";
import Profile from "../Components/Profile";
import Project from "../Components/Project";
import Cta from "../Components/Cta";
import Layout from "../Components/Layout";
import projectInfo from "../Components/Info/project_info.js";

function Home() {
  return (
    <div>
      <Layout>
        <Front />
        <Profile />
        <hr />
        <div>
          <h2>Projects</h2>
          {projectInfo.map(({ id, img, title, description, ghlink, wplink }) => {
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
    </div >
  )
}

export default Home;