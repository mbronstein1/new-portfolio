import React from 'react';
import Container from '../UI/Container';
import Reveal from '../UI/Reveal';
import { experience } from '../../data/site-data';
import classes from './Experience.module.css';

const Experience = () => {
  return (
    <section id='experience' className='section'>
      <Container>
        <Reveal>
          <p className='eyebrow'>02 / Experience</p>
          <h2 className='section-title'>From frontend developer to technical lead</h2>
          <p className='section-intro'>
            Four roles in three years, taking on more of the stack, the infrastructure, and the team along the way.
          </p>
        </Reveal>
        <div className={classes.company}>
          <span className={classes['company-name']}>Arvist AI</span>
          <span className={classes['company-meta']}>Chicago, IL · Remote</span>
        </div>
        <ol className={classes.timeline}>
          {experience.map(({ role, dates, points }, index) => (
            <Reveal as='li' key={role} className={`${classes.item} ${index === 0 ? classes.current : ''}`}>
              <div className={classes.header}>
                <h3>{role}</h3>
                <span className={classes.dates}>{dates}</span>
              </div>
              <ul>
                {points.map(point => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default Experience;
