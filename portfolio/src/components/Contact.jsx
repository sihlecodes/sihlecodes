import instagramIcon from '../assets/instagram-contact.svg';
import whatsappIcon from '../assets/whatsapp-contact.svg';

import ContactForm from "./ContactForm";
import { Links } from '../App';

import './Contact.scss';

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