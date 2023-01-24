import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './ContactForm.scss';

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
    <form className="Contact-form" ref={form} onSubmit={sendEmail}>
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

      <input className="submit" type="submit" value={buttonText} />
    </form>
  );
}

export default ContactForm;