import React from 'react';
import Random from '../../assets/navlogo.jpg';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Contact page
The contact page showcase a high quality picture of the owner, 
the opening times, a contact form so anyone can book tables, the address,
 and a map embedded inside the page.
 */}

      <div>Opening Hours</div>

      <img src={Random} alt="" />
      <div>Contact Detailsss</div>
      <div>Contact Detailsss</div>
    </div>
  );
}
