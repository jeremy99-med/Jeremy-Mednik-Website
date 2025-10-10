function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-darker">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1>Jeremy Mednik</h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#about-me">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#my-projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#resume">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
