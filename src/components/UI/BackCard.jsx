import React from 'react';

const BackCard = ({ cardInfo: { description, type, githubLink, liveLink }, className: { back, cardContent, technologies } }) => {
  return (
    <div className={back}>
      <div className={cardContent}>
        <p>{description}</p>
        <div className={technologies}>
          <p>Technologies:</p>
          <p>{type}</p>
        </div>
        <div>
          <a href={githubLink} target='__blank' referrerPolicy='no-referrer'>
            Github
          </a>
          <a href={liveLink} target='__blank' referrerPolicy='no-referrer'>
            Deployed Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default BackCard;
