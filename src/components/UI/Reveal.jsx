import React from 'react';
import { useInView } from 'react-intersection-observer';

// Fades its children in the first time they scroll into view
const Reveal = ({ as: Tag = 'div', className = '', delay = 0, children, ...props }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '0px 0px -60px 0px' });

  return (
    <Tag ref={ref} className={`reveal ${inView ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...props}>
      {children}
    </Tag>
  );
};

export default Reveal;
