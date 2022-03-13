import Github from '../assets/Footer-images/Github.png';
import LinkedIn from '../assets/Footer-images/Linkedin.jpg';

export default function Footer() {
  //Local State
  const yearNow = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/salahsweden/"
          >
            <img src={LinkedIn} alt="LinkedIn icon" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SalahUddin7"
          >
            <img src={Github} alt="Github icon" />
          </a>
        </li>
      </ul>
      <p> Designed and Created by Salah Uddin | © {yearNow}</p>
    </footer>
  );
}
