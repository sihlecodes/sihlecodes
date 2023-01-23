import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import instagramIcon from '../assets/instagram-contact.svg';
import whatsappIcon from '../assets/whatsapp-contact.svg';

import { Links } from '../App';

import './Contact.scss';

function ContactForm() {
  const form = useRef();

  const text = {
    default: 'Send message',
    sending: 'Sending...',
    sent: 'Email Sent',
    error: 'Failed to Send'
  }

  const [buttonText, setButtonText] = useState(text.default);
  
  const resetButtonText  = () => setTimeout(() => setButtonText(text.default), 2000);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText(text.sending);
    
    emailjs.sendForm('sihlecodes.gmail', 'sihlecodes.template', form.current, 'c0ujXFzztdrKXLZx0').then(
      (response) => {
        setButtonText(text.sent);
        resetButtonText();
      }, (error) => {
        setButtonText(text.error);
        resetButtonText();
      }
    )
  }

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <div className="field">
        <label for="sender_name"><span class className="required-indicator">*</span> Your name <span className="required-indicator">Required</span></label>
        <input className="text-input" type="text" name="sender_name" required="true" />
      </div>

      <div className="field">
        <label for="sender_email">Your email address</label>
        <input className="text-input" type="text" name="sender_email" />
      </div>

      <div className="field">
        <label for="sender_message"><span className="required-indicator">*</span> Message <span className="required-indicator">Required</span></label>
        <textarea className="text-input" name="sender_message" required="true"></textarea>
      </div>

      <input type="submit" value={buttonText} />
    </form>
  );
}

const ContactIconLink = ({ href, src, alt }) => (
  <a className="Contact-link" href={href}>
    <img src={src} alt={alt} />
  </a>
);


function Contact() {
  return (
    <div className="Contact">
      <h2>Get In Touch</h2>

      <div className="content">
        <p>Want to get in contact with me? Send me an email.</p>
        <ContactForm />

        <div className="links">
          <ContactIconLink href={Links.instagram} src={instagramIcon} />
          <ContactIconLink href={Links.whatsapp} src={whatsappIcon} />
        </div>
      </div>
    </div>
  );
}

export default Contact;