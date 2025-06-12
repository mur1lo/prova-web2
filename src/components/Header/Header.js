import './Header.css'; 

function Header() {
  return (
    <header className="header-container">
      <h1>PetFinder</h1>
      <div className="header-content">
        <nav className="header-nav">
          <ul className="nav-menu">
            <li className="menu-item"><a href="/">Inicio</a></li>
            <li className="menu-item"><a href="/galeria">Galeria</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;