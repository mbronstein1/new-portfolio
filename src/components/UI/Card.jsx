import React, { useState } from 'react';
import classes from './Card.module.css';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

const Card = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(prev => !prev);
  };

  const style = {
    backgroundImage: `url(${data.img})`,
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
  };

  const frontClasses = {
    front: classes.front,
    cardContent: classes['card-content'],
    cardOverlay: classes['card-overlay'],
  };

  const backClasses = {
    back: classes.back,
    cardContent: classes['card-content'],
    technologies: classes.technologies,
  };

  return (
    <div onMouseEnter={flip} onMouseLeave={flip} className={`${classes.card} ${isFlipped ? classes.flipped : ''}`}>
      <FrontCard title={data.title} className={frontClasses} style={style} />
      <BackCard cardInfo={data} className={backClasses} />
    </div>
  );
};

export default Card;
