export default function Navbar(params) {
  return (
    <nav id="app-navbar" className="app-navbar">
      <a className="nav-link app-a" href="#app-welcome-section">
        About
      </a>
      <a className="nav-link app-a" href="#app-projects-section">
        Projects
      </a>
      <a className="nav-link app-a" href="#app-contact-section">
        Contact
      </a>
    </nav>
  );
}
