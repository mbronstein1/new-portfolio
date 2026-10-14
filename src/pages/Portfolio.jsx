import React, { useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Container from '../components/UI/Container';
import Reveal from '../components/UI/Reveal';
import CaseStudy from '../components/Work/CaseStudy';
import ProjectCard from '../components/Work/ProjectCard';
import classes from './Portfolio.module.css';
import projectData from '../data/portfolio-data';
import { caseStudies } from '../data/site-data';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={`section ${classes.portfolio}`}>
      <Container>
        <Reveal>
          <p className='eyebrow'>Selected work</p>
          <h1 className={classes.title}>Things I've built</h1>
          <p className='section-intro'>
            Most of my recent work lives in a private codebase, so instead of repos, here's a look at a few problems I've owned: what was in the way, what I built, and how
            it turned out.
          </p>
        </Reveal>

        <div className={classes.studies}>
          {caseStudies.map((study, index) => (
            <CaseStudy key={study.id} study={study} index={index} />
          ))}
        </div>

        <details className={classes.earlier}>
          <summary>
            <span>
              <h2>Earlier work</h2>
              <span className={classes['earlier-meta']}>Projects from earlier in my career, mostly from Northwestern's coding bootcamp</span>
            </span>
            <FiChevronDown className={classes.chevron} size={22} aria-hidden='true' />
          </summary>
          <div className={classes.projects}>
            {projectData.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </details>
      </Container>
    </main>
  );
};

export default Portfolio;
