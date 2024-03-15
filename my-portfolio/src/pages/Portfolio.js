import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {/* Example project */}
        <Project
          title="Petmania"
          image="./pictures/icon.png"
          deployedLink="https://petmania-7cff33302ae4.herokuapp.com/"
          githubLink="https://github.com/SevenImm/PetMania_The_Forgoten_Ones"
        />
        <Project
          title="Gig of Bands"
          image="./pictures/band.jpg"
          deployedLink="https://gigsforbands-904d8d5bac8c.herokuapp.com/"
          githubLink="https://github.com/mrent32/gig-of-bands"
        />
        <Project
          title="Github Weather"
          image="./pictures/cloud.png"
          deployedLink="https://sevenimm.github.io/Scruffy-Beards-Team/"
          githubLink="https://github.com/SevenImm/Scruffy-Beards-Team"
        />
        <Project
          title="Pro Note Taker"
          image="./pictures/notepad.png"
          deployedLink="https://pro-note-takers-6660a7efe34c.herokuapp.com/"
          githubLink="https://github.com/astrodog5150/Pro-Note-Taker"
        />
        <Project
          title="Tech Blog"
          image="./pictures/typewriter.png"
          deployedLink="https://techblogawesome-98d246df8daf.herokuapp.com/"
          githubLink="https://github.com/astrodog5150/Tech-Blog"
        />
        <Project
          title="SQL Employee Tracker"
          image="./pictures/sql.jpg"
          githubLink="https://github.com/astrodog5150/SQL-Employee-Tracker"
        />

        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Portfolio;