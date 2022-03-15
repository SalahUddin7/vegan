import Github from "../assets/Footer-images/Github.png";
import LinkedIn from "../assets/Footer-images/Linkedin.jpg";

// nesting, i see no effor to try to refactor the code here -1
export default function Footer() {
  //Local State
  const yearNow = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul>
        {/* this is a component */}
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/salahsweden/"
          >
            <img src={LinkedIn} alt="LinkedIn icon" />
          </a>
        </li>
        {/* and this is other item based on the same component */}
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
