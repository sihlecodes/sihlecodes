import { Fragment, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';

function ContactForm() {
  const form = useRef();

  const defaultButtonText = 'Send message';
  const [buttonText, setButtonText] = useState(defaultButtonText);

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonText('Sending...');

    emailjs.sendForm('sihlecodes.gmail', 'sihlecodes.template', form.current, 'c0ujXFzztdrKXLZx0').then(
      (response) => {
        setButtonText(defaultButtonText);
      }, (error) => {
        setButtonText(defaultButtonText);
      }
    )
  }

  return (
    <form className="Contact-form" ref={form} onSubmit={sendEmail}>
      <div className="Contact-form-field">
        <label for="sender_name"><span class className="Contact-required-field">*</span> Your name <span className="Contact-required-field">Required</span></label>
        <input type="text" name="sender_name" required="true" />
      </div>

      <div className="Contact-form-field">
        <label for="sender_email">Your email address</label>
        <input type="text" name="sender_email" />
      </div>

      <div className="Contact-form-field">
        <label for="sender_message"><span className="Contact-required-field">*</span> Message <span className="Contact-required-field">Required</span></label>
        <textarea type="text" name="sender_message" required="true"></textarea>
      </div>

      <div className="Contact-form-field">
        <input type="submit" value={buttonText} />
      </div>
    </form>
  );
}

function Contact() {
  return (
    <Fragment>
      <h2>Get In Touch</h2>

      <div className="Contact-content">
        <p>Want to get in contact with me? Send me an email.</p>
        <ContactForm />
      </div>
    </Fragment>
  );
}

export default Contact;