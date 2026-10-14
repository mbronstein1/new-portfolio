import React from 'react';
import Reveal from '../UI/Reveal';
import classes from './CaseStudy.module.css';

const CaseStudy = ({ study: { title, period, problem, work, outcome, flow, tags }, index }) => {
  return (
    <Reveal as='article' className={`card ${classes.study}`}>
      <div className={classes.header}>
        <span className={classes.number}>{String(index + 1).padStart(2, '0')}</span>
        <div>
          <h2>{title}</h2>
          <p className={classes.period}>{period}</p>
        </div>
      </div>

      {flow && (
        <ol className={classes.flow} aria-label='How it fits together'>
          {flow.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      )}

      <div className={classes.body}>
        <div>
          <h3>The problem</h3>
          <p>{problem}</p>
        </div>
        <div>
          <h3>What I did</h3>
          <ul>
            {work.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={classes.footer}>
        <p className={classes.outcome}>
          <span>Outcome</span>
          {outcome}
        </p>
        <ul className={classes.tags}>
          {tags.map(tag => (
            <li key={tag} className='tag'>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

export default CaseStudy;
