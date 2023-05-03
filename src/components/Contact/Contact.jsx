import React from 'react';
import classes from './Contact.module.css';
import Container from '../UI/Container';
import img from '../../assets/headshot-2.jpg';

const Contact = () => {
  return (
    <div className={classes['contact-container']} id='contact'>
      <h2>Contact Me!</h2>
      <Container>
        <div className={classes.content}>
          <form className={classes['contact-form']}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' />
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' cols='30' rows='10'></textarea>
            <button type='submit'>Send</button>
          </form>

          <div className={classes.img}>
            <img src={img} width='300px' alt='' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
