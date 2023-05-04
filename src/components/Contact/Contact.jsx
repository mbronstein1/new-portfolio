import React from 'react';
import classes from './Contact.module.css';
import Container from '../UI/Container';
import img from '../../assets/headshot-2.jpg';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className={classes['contact-container']} id='contact'>
      <Container>
        <div className={classes['contact-header']}>
          <h3>Contact Me</h3>
          <h4>I'd Love To Hear From You!</h4>
        </div>
        <div className={classes.content}>
          <ContactForm />
          <div>
            <img src={img} alt='' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
