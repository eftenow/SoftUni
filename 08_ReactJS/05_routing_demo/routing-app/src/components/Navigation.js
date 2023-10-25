import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">My App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to={'/about'}>About</Link>

              </li>
              <li className="nav-item">
              <Link className="nav-link" to={'/starships'}>Starships</Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  