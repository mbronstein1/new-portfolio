import React, { useEffect } from 'react';
import Container from '../components/UI/Container';
import Card from '../components/UI/Card';
import classes from './Portfolio.module.css';
import projectData from '../data/portfolio-data';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.portfolio}>
      <Container>
        <h2>My Projects</h2>
        <div className={classes['card-container']}>
          {projectData.map(project => (
            <Card key={project.id} data={project} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
