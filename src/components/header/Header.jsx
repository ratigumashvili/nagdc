import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Logo from "../../img/logo.svg"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import "./header.scss"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="left">
            <button className="menu-btn" onClick={toggleMenu}>
              {menuOpen ? (
                <CloseIcon className="menu-icon" />
              ) : (
                <MenuIcon className="menu-icon" />
              )}
            </button>
            <h1 className="title">
              <Link to="/">საქართველოს ეროვნული არქივის ელექტრონული კინოკატალოგი</Link>
            </h1>
          </div>
          <div className="right">
            <a href="./" className="language">
              ENG
            </a>
            <Link to="/" className="logo-holder"><img src={Logo} alt="App logo" className="logo" /></Link>
          </div>
        </div>
      </div>
      {menuOpen && (
        <nav className="main-nav">
          <div className="container">
            <ul className="navigation">
              <li><Link to="/" onClick={toggleMenu}>მთავარი</Link></li>
              <li><Link to="/list" onClick={toggleMenu}>მონაცემები</Link></li>
              <li><a href="./">გამოყენების პირობები</a></li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
