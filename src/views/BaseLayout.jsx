import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light p-3">
        <h1 className="m-0">
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about-us">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/available-cats">
                Available cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/donate">
                Donate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact-us">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content" className="p-4">
        <Outlet />
      </main>
      <footer className="bg-light text-center py-2">
        <p className="m-0">© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
