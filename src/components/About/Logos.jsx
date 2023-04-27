import React from 'react';
import classes from './Logos.module.css';
import { InView } from 'react-intersection-observer';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiMysql, SiMongodb, SiGraphql, SiTypescript } from 'react-icons/si';

const components = [
  {
    component: AiFillHtml5,
    color: 'rgb(220,74,37)',
    rootMargin: '-50px 0px',
  },
  {
    component: FaCss3Alt,
    color: 'rgb(33,76,228)',
    rootMargin: '-75px 0px',
  },
  {
    component: SiJavascript,
    color: 'rgb(232,212,77)',
    rootMargin: '-100px 0px',
  },
  {
    component: FaReact,
    color: 'rgb(96,219,251)',
    rootMargin: '-125px 0px',
  },
  {
    component: SiRedux,
    color: 'rgb(118,73,189)',
    rootMargin: '-150px 0px',
  },
  {
    component: SiTypescript,
    color: 'rgb(47,115,191)',
    rootMargin: '-175px 0px',
  },
  {
    component: FaNodeJs,
    color: 'rgb(81,153,66)',
    rootMargin: '-200px 0px',
  },
  {
    component: SiMysql,
    color: 'rgb(241,146,28)',
    rootMargin: '-225px 0px',
  },
  {
    component: SiMongodb,
    color: 'rgb(0,237,100)',
    rootMargin: '-250px 0px',
  },
  {
    component: SiGraphql,
    color: 'rgb(239,0,151)',
    rootMargin: '-275px 0px',
  },
];

const Logos = () => {
  return (
    <div className={classes.logos}>
      {components.map(({ component: Component, rootMargin, color }, index) => (
        <InView rootMargin={rootMargin} threshold={1} triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              key={`About-icons: ${index}`}
              ref={ref}
              style={{ transform: `translateX(${inView ? '0' : '-50px'})`, transition: 'all .7s ease-in-out', opacity: `${inView ? 1 : 0}` }}>
              <Component size='50px' color={color} />
            </div>
          )}
        </InView>
      ))}
    </div>
  );
};

export default Logos;
