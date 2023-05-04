import React from 'react';
import classes from './ContactForm.module.css';
import { useFormHandler } from '../../hooks/useFormHandler';

const ContactForm = () => {
  const { status, isLoading, formData, changeHandler, formSubmitHandler } = useFormHandler();

  return (
    <form className={classes['contact-form']} onSubmit={formSubmitHandler}>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' id='name' value={formData.name} onChange={changeHandler} />
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' value={formData.email} onChange={changeHandler} />
      <label htmlFor='message'>Message</label>
      <textarea name='message' id='message' cols='30' rows='10' value={formData.message} onChange={changeHandler}></textarea>
      <button type='submit'>Send</button>
      {status.error && !isLoading && <p className={classes.error}>{status.message}</p>}
      {!status.error && isLoading && <p className={classes.sending}>Sending...</p>}
      {!status.error && status.message !== '' && <p className={classes.success}>{status.message}</p>}
    </form>
  );
};

export default ContactForm;
