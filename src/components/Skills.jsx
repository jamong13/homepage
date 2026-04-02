import React from "react";

import "./Skills.css";

const skills = {
  Frontend: [
    {
      name: "HTML",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "JavaScript",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "jQuery",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
    },
    {
      name: "React",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Sass",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
    {
      name: "Bootstrap",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "React Bootstrap",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg",
    },
    {
      name: "Tailwind CSS",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  Backend: [
    {
      name: "JSP",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg",
    },
  ],
  Languages: [
    {
      name: "Java",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    },
    {
      name: "C#",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
    {
      name: "Python",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
  ],
  Database: [
    {
      name: "MySQL",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    },
  ],
  DevTools: [
    {
      name: "Vs Code",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "Eclipse",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",
    },
    {
      name: "Vite",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "Git",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "Notion",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
    },
  ],
  Design: [
    {
      name: "Photoshop",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
    },
    {
      name: "Illustrator",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg",
    },
    {
      name: "Figma",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
  ],
};

export default function Skills() {
  return (
    <div className="skills section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Skills</span>
          </h2>
          <div className="section-divider"></div>
        </div>
        <section className="skills-section">
          {Object.entries(skills).map(([category, items]) => (
            <article className="skills-box" key={category}>
              <h3>{category}</h3>
              <div className="skills-list">
                {items.map((skill) => (
                  <div key={skill.name} className="skill-content">
                    <img src={skill.path} alt={skill.name} />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
