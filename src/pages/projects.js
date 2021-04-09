import React from "react";
import Layout from "../Components/Layout";
import Project from "../Components/Project";
import projectInfo from "../Components/Info/project_info.js";

function Projects() {
  return (
    <Layout>
      <h2>Projects</h2>
      <p>On this page you will find some of my projects that I believe represent a good part of everything I learned in 
      the area of ​​programming. But before introducing these projects, I think it's important to call attention to this 
      site you are on, my personal website, where I present my professional, contact and portfolio information. It is 
      one of the projects that I am most proud of and I intend to improve it over the years with all the progress that 
      awaits me.</p>
      <p>This website was created using Gatsby.js, with the main objective of taking advantage of the speed that the 
      framework provides when producing a static webpage. The design was created by me using Sass and Modular CSS, to 
      guarantee the modularity of the components. I intend to keep the site simple and concise, but I have plans to take 
      advantage of all the benefits that Gatsby brings and to update, in general, the design and structure of the site as 
      needed. If you are interested in accessing the source code, it is available on my GitHub profile, here.</p>
      <hr />
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
