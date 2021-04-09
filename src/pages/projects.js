import React from "react";
import Layout from "../Components/Layout";
import Project from "../Components/Project";
import projectInfo from "../Components/Info/project_info.js";

function Projects() {
  return (
    <Layout>
      <h2>Projects</h2>
      {projectInfo
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
