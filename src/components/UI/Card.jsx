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
          <h4>Hi</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
