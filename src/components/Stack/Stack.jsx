import React from 'react';
import Container from '../UI/Container';
import Reveal from '../UI/Reveal';
import { stack } from '../../data/site-data';
import classes from './Stack.module.css';

const Stack = () => {
  return (
    <section id='stack' className='section'>
      <Container>
        <Reveal>
          <p className='eyebrow'>03 / Stack</p>
          <h2 className='section-title'>Tools I use every day</h2>
          <p className='section-intro'>What I reach for day to day, from the browser down to the servers.</p>
        </Reveal>
        <div className={classes.groups}>
          {stack.map(({ group, tools }, index) => (
            <Reveal key={group} className={`card ${classes.group}`} delay={index * 100}>
              <h3>{group}</h3>
              <ul>
                {tools.map(({ name, icon: Icon, color }) => (
                  <li key={name}>
                    <Icon size={20} color={color || 'currentColor'} aria-hidden='true' />
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stack;
