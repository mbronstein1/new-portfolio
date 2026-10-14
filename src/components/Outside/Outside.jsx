import React from 'react';
import { GiFrenchHorn, GiFleurDeLys, GiBaseballGlove } from 'react-icons/gi';
import Container from '../UI/Container';
import Reveal from '../UI/Reveal';
import classes from './Outside.module.css';

const items = [
  {
    icon: GiFrenchHorn,
    title: 'Orchestral musician',
    text: "Before I wrote code, I was a professional orchestral musician with a B.M. in French Horn Performance from Roosevelt University's Chicago College of Performing Arts. The habits carry over: deliberate practice, preparing for high-stakes moments, and listening closely to the people around me.",
  },
  {
    icon: GiFleurDeLys,
    title: 'Eagle Scout',
    text: 'I earned the rank of Eagle Scout, and the principles behind it (leadership, determination, and integrity) still shape how I lead a team today.',
  },
  {
    icon: GiBaseballGlove,
    title: 'Catcher, Chicago River Bandits',
    text: "I've played competitive amateur baseball in Chicago with the Chicago River Bandits for about 13 years. I'm primarily a catcher, a contact hitter at the plate, and once I'm on base I like to use my legs to cause some havoc.",
  },
];

const Outside = () => {
  return (
    <section id='outside' className='section'>
      <Container>
        <Reveal>
          <p className='eyebrow'>04 / Outside of code</p>
          <h2 className='section-title'>Before (and beyond) software</h2>
        </Reveal>
        <div className={classes.grid}>
          {items.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} className={`card ${classes.item}`} delay={index * 100}>
              <div className={classes.staff} aria-hidden='true' />
              <Icon className={classes.icon} size={40} aria-hidden='true' />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Outside;
