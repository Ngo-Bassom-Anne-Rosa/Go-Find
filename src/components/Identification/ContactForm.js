import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <h2>Contact the owner</h2>
      <form>
        <div>
          <label>Your Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Your Message</label>
          <textarea />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
