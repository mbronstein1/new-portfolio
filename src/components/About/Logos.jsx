import React from 'react';
import classes from './Logos.module.css';
import { InView } from 'react-intersection-observer';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiMysql, SiMongodb, SiGraphql, SiTypescript, SiExpress } from 'react-icons/si';

const components = [
  {
    component: AiFillHtml5,
    color: 'rgb(220,74,37)',
    rootMargin: '-10px 50px',
    name: 'HTML',
  },
  {
    component: FaCss3Alt,
    color: 'rgb(33,76,228)',
    rootMargin: '-15px 50px',
    name: 'CSS',
  },
  {
    component: SiJavascript,
    color: 'rgb(232,212,77)',
    rootMargin: '-25px 50px',
    name: 'JavaScript',
  },
  {
    component: FaReact,
    color: 'rgb(96,219,251)',
    rootMargin: '-30px 50px',
    name: 'React',
  },
  {
    component: SiRedux,
    color: 'rgb(118,73,189)',
    rootMargin: '-35px 50px',
    name: 'Redux',
  },
  {
    component: SiTypescript,
    color: 'rgb(47,115,191)',
    rootMargin: '-40px 50px',
    name: 'Typescript',
  },
  {
    component: FaNodeJs,
    color: 'rgb(81,153,66)',
    rootMargin: '-5px 50px',
    name: 'Node.js',
  },
  {
    component: SiExpress,
    color: 'rgb(73,73,73)',
    rootMargin: '-10px 50px',
    name: 'Express.js',
  },
  {
    component: SiMysql,
    color: 'rgb(241,146,28)',
    rootMargin: '-15px 50px',
    name: 'MySQL',
  },
  {
    component: SiMongodb,
    color: 'rgb(0,237,100)',
    rootMargin: '-20px 50px',
    name: 'MongoDB',
  },
  {
    component: SiGraphql,
    color: 'rgb(239,0,151)',
    rootMargin: '-25px 50px',
    name: 'GraphQL',
  },
];

const Logos = () => {
  return (
    <div className={classes['logos-container']}>
      {components.map(({ component: Component, rootMargin, color, name }, index) => (
        <InView key={name} rootMargin={rootMargin} threshold={1} triggerOnce={true}>
          {({ inView, ref }) => (
            <div key={`About-icons: ${index}`} ref={ref} className={`${inView ? classes.logos : `${classes.hidden}`}`}>
              <Component size='50px' color={color} />
              <div className={classes['logos-overlay']}>
                <p>{name}</p>
              </div>
            </div>
          )}
        </InView>
      ))}
    </div>
  );
};

export default Logos;
