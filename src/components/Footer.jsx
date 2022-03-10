export default function Footer() {
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
            <img src="./Footer-images/Linkedin.jpg" alt="" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SalahUddin7"
          >
            <img src="./Footer-images/Github.png" alt="" />
          </a>
        </li>
      </ul>
      <p> Designed and Created by Salah Uddin | © {yearNow}</p>
    </footer>
  );
}
