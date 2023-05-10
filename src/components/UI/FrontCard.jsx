import React from 'react';

const FrontCard = ({ title, className: { front, cardContent, cardOverlay }, style }) => {
  return (
    <div style={style} className={front}>
      <div className={`${cardContent} ${cardOverlay}`}>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default FrontCard;
