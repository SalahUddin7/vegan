import React from 'react';

export const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h1>Contact Form</h1>
      <form action="">
        <div className="form-line">
          <label htmlFor="fname">First Name</label>
        </div>
        <div className="form-line">
          <input type="text" placeholder="Your name.." />
        </div>

        <div className="form-line">
          <label htmlFor="lname">Last Name</label>
        </div>
        <div>
          <input type="text" placeholder="Your last name.." />
        </div>

        <div className="form-line">
          <label for="subject">Message</label>
        </div>
        <div className="form-line">
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
        </div>

        <div className="contact-submit">
          {' '}
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
};
