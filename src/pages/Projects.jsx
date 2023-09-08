import React from 'react'
import Layout from '../assets/Layout'
import p1 from "./images/banner1.png";
import p2 from "./images/banner2.png";
import p3 from "./images/banner3.png";
import p4 from "./images/banner4.png";
const Projects = () => {
  return (
      <Layout>
          <marquee direction="left">Hey there, some sites may not be responsive. and Music Player server is broken.</marquee>
          <section class="greeting-section">
              <div class="greeting">
                  <h1>Welcome to My Projects</h1>
                  <p>Check out some of my recent projects below:</p>
              </div>
          </section>
          <section class="project-section">
              <div class="projects">
                  <div class="project-image">
                      <img src={p1} alt="Project Title"/>
                  </div>
                  <div class="project-details">
                      <h2>Todolist</h2>
                      <p>A Todo list is a popular project for beginners in React, as it can be implemented with a simple
                          interface and it helps
                          to understand the fundamentals of React.</p>
                      <a target="_blank" href="https://mashoor-todo.onrender.com/" class="button">View Project</a>
                  </div>
              </div>
              <div class="projects">
                  <div class="project-image">
                      <img src={p2} alt="Project Title"/>
                  </div>
                  <div class="project-details">
                      <h2>Unviersity website</h2>
                      <p>The website usually has a header that contains the university logo, navigation menu, and possibly
                          some important
                          announcements.</p>
                      <a target="_blank" href="https://mashoornegi.github.io/Project/" class="button">View Project</a>
                  </div>
              </div>
              <div class="projects">
                  <div class="project-image">
                      <img src={p3} alt="Project Title"/>
                  </div>
                  <div class="project-details">
                      <h2>Music Player</h2>
                      <p>A music player built with React would allow users to browse and play songs from a library of music. The user interface
                          would typically consist of a list of songs, a play/pause buttons.</p>
                      <a target="_blank" href="https://love-to-music.netlify.app/" class="button">View Project</a>
                  </div>
              </div>
              <div class="projects">
                  <div class="project-image">
                      <img src={p4} alt="Project Title"/>
                  </div>
                  <div class="project-details">
                      <h2>Youtube Clone</h2>
                      <p>creative my personal youtube clone learned during internship can comment easy login with otp feature</p>
                      <a target="_blank" href="https://akyoutube.vercel.app/" class="button">View Project</a>
                  </div>
              </div>
          </section>
      </Layout>
  )
}

export default Projects