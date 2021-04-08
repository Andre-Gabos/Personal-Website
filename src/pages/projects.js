import React from "react";
import Layout from "../Components/Layout";
import Project from "../Components/Project";

function Projects() {
  return (
    <Layout>
      <h2>Projects</h2>
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
    </Layout>
  )
}

export default Projects;
