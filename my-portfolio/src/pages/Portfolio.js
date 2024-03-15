import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Petmania",
      image: "./pictures/icon.png",
      deployedLink: "https://petmania-7cff33302ae4.herokuapp.com/",
      githubLink: "https://github.com/SevenImm/PetMania_The_Forgoten_Ones"
    },
    {
      title: "Gig of Bands",
      image: "./pictures/band.jpg",
      deployedLink: "https://gigsforbands-904d8d5bac8c.herokuapp.com/",
      githubLink: "https://github.com/mrent32/gig-of-bands"
    },
    {
      title: "Github Weather",
      image: "./pictures/cloud.png",
      deployedLink: "https://sevenimm.github.io/Scruffy-Beards-Team/",
      githubLink: "https://github.com/SevenImm/Scruffy-Beards-Team"
    },
    {
      title: "Pro Note Taker",
      image: "./pictures/notepad.png",
      deployedLink: "https://pro-note-takers-6660a7efe34c.herokuapp.com/",
      githubLink: "https://github.com/astrodog5150/Pro-Note-Taker"
    },
    {
      title: "Tech Blog",
      image: "./pictures/typewriter.png",
      deployedLink: "https://techblogawesome-98d246df8daf.herokuapp.com/",
      githubLink: "https://github.com/astrodog5150/Tech-Blog"
    },
    {
      title: "SQL Employee Tracker",
      image: "./pictures/sql.jpg",
      githubLink: "https://github.com/astrodog5150/SQL-Employee-Tracker"
    }
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <div className="project-links">
              {project.deployedLink && (
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View GitHub</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;