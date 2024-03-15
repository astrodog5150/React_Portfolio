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
          image="path_to_image.jpg"
          deployedLink="https://petmania-7cff33302ae4.herokuapp.com/"
          githubLink="https://github.com/SevenImm/PetMania_The_Forgoten_Ones"
        />
        <Project
          title="Gig of Bands"
          image="path_to_image.jpg"
          deployedLink="https://gigsforbands-904d8d5bac8c.herokuapp.com/"
          githubLink="https://github.com/mrent32/gig-of-bands"
        />
        <Project
          title="Github Weather"
          image="path_to_image.jpg"
          deployedLink="https://sevenimm.github.io/Scruffy-Beards-Team/"
          githubLink="https://github.com/SevenImm/Scruffy-Beards-Team"
        />
        <Project
          title="Pro Note Taker"
          image=""
          deployedLink="https://pro-note-takers-6660a7efe34c.herokuapp.com/"
          githubLink="https://github.com/astrodog5150/Pro-Note-Taker"
        />
        <Project
          title="Tech Blog"
          image=""
          deployedLink="https://techblogawesome-98d246df8daf.herokuapp.com/"
          githubLink="https://github.com/astrodog5150/Tech-Blog"
        />
        <Project
          title="SQL Employee Tracker"
          image=""
          githubLink="https://github.com/astrodog5150/SQL-Employee-Tracker"
        />

        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Portfolio;