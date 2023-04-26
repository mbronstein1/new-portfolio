import React from 'react';
import video from '../../assets/line-46957.mp4';
import classes from './Video.module.css';

// Background video
const Video = () => {
  return (
    <video className={classes.video} playsInline autoPlay muted loop>
      <source src={video} type='video/webm' />
    </video>
  );
};

export default Video;
