import React from "react";
import Layout from "../Components/Layout";
import "../styles/aboutme.module.scss";

const About = () => {
  return (
    <Layout>
      <div className="about">
        <h2>About Me</h2>

        <p>Front-end Web Developer ( self-proclaimed ), graduated Psychologist and behavioral analyst from the
        Universidade Estadual Paulista - Bauru, São Paulo, Brazil -, I studied throughout my life to understand and help people
        in their development and well being.
        As an autonomous psychologist, I worked in the areas of health and education, where I had the opportunity to develop analysis,
        communication and listening skills, and to understand in a larger scope the relationship that people establish with the world
        around them, more specifically the technology that today is part of who we are.</p>
        <p>In 2020 I made the decision to change my field of work, from psychology to programming, but my focus remains the same,
        on people. Be it the people I work with, live with or clients, I always seek to build positive relationships and collaborative
        environments where everyone can interact and express themselves. Personally speaking, this attitude has always enabled me
        an agile and adaptable development along with those who work with me, in addition to the development of freer and less
        restrictive environments where people grow together.</p>

        <h3>Design & Development</h3>

        <p>I started drawing when I was a kid and never stopped. Since then I have formally studied drawing, painting and sculpting.</p>
        <p>I have always been passionate about art and open to aesthetic, cultural and intellectual experiences, and applying that
        passion to programming is my goal for the future. So I intend to study Web Design and UI / UX Design, and include all this
        knowledge in my work as a developer.</p>
        <p>My main goal is to apply an evergrowing knowledge in the production of relevant software, which has the potential to
        contribute to the well-being and practicality of people's lives.</p>
      </div>
    </Layout>
  )
}

export default About;