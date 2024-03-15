import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {/* Example project */}
        <Project
          title="Project 1"
          image="path_to_image.jpg"
          deployedLink="https://example.com"
          githubLink="https://github.com/example"
        />
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Portfolio;