import React, { useState } from 'react';
import classes from './Card.module.css';

const Card = ({ data: { title, type, img, description, liveLink, githubLink } }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(prev => !prev);
  };

  return (
    <div onMouseEnter={flip} onMouseLeave={flip} className={`${classes.card} ${isFlipped ? classes.flipped : ''}`}>
      <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPositionX: 'center' }} className={` ${classes.front}`}>
        <div className={`${classes['card-content']} ${classes['card-overlay']}`}>
          <h4>{title}</h4>
        </div>
      </div>
      <div className={` ${classes.back}`}>
        <div className={`${classes['card-content']}`}>
          <p>{description}</p>
          <div className={classes.technologies}>
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
    </div>
  );
};

export default Card;
