import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateEmail = (email) => {
    //email regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    if (name.trim() === '') {
      setErrors({ ...errors, name: 'Name is required' });
      return;
    }

    if (email.trim() === '') {
      setErrors({ ...errors, email: 'Email is required' });
      return;
    } else if (!validateEmail(email)) {
      setErrors({ ...errors, email: 'Invalid email address' });
      return;
    }

    if (message.trim() === '') {
      setErrors({ ...errors, message: 'Message is required' });
      return;
    }

    // Add your form submission logic here
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;