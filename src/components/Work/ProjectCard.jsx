import React from 'react';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import classes from './ProjectCard.module.css';

const ProjectCard = ({ project: { title, type, img, description, githubLink, liveLink } }) => {
  return (
    <article className={`card ${classes.project}`}>
      <img src={img} alt={`${title} screenshot`} loading='lazy' />
      <div className={classes.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className={classes.type}>{type}</p>
        <div className={classes.links}>
          <a href={githubLink} target='_blank' rel='noreferrer'>
            <FiGithub /> Code
          </a>
          {liveLink && (
            <a href={liveLink} target='_blank' rel='noreferrer'>
              <FiArrowUpRight /> Live site
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
