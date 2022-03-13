//NPM Packgages
import { ContactForm } from './ContactForm';
import ContactImage from '../../assets/contact-images and maps/contact-image1.jpg';
import ContactMap from '../../assets/contact-images and maps/contact-image3.jpg';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-owner">
        <img src={ContactImage} alt="restaurent owner" />
      </div>
      <div>
        <h1>Opening Hours</h1>
        <p>Monday-Friday: 8:30–21:00. </p>
        <p>Saturday-Sunday: 14.00–21:00. </p>
      </div>

      <ContactForm />

      <div>
        <h1>Address:</h1>
        <p>Klastorpsvägen 4, 152 42 Södertälje. </p>
      </div>

      <div>
        <img src={ContactMap} alt="restaurent owner" />
      </div>
    </div>
  );
}
