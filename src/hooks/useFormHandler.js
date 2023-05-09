import { useState, useEffect } from 'react';
import validateEmail from '../utils/helpers';
import { send } from 'emailjs-com';

export const useFormHandler = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ error: false, message: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus({ error: false, message: '' });
    }, 5000);

    return () => clearTimeout(timeout);
  }, [status.message]);

  const changeHandler = e => {
    const { name, value } = e.target;
    setStatus({ error: false, message: '' });
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formSubmitHandler = async e => {
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    e.preventDefault();

    if (!validateEmail) {
      setStatus({ error: true, message: 'Please enter a valid email' });
      return;
    }

    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      setStatus({ error: true, message: 'Please fill in all fields to send Matthew a message!' });
      return;
    } else {
      try {
        setIsLoading(true);
        await send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID);
        setStatus({ error: false, message: "Thanks for reaching out! I'll be in touch soon." });
        setFormData({ name: '', email: '', message: '' });
      } catch (err) {
        setStatus({ error: true, message: 'Something went wrong. Please try again.' });
      }
      setIsLoading(false);
    }
  };

  return {
    status,
    isLoading,
    formData,
    changeHandler,
    formSubmitHandler,
  };
};
