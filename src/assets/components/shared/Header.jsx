import { Link } from "react-router-dom"
import { useState } from "react"
import './styles/Header.css'

const Header = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);

  const handleMenu = () => {
    setisOpenMenu(!isOpenMenu);
  }

  const closeMenu = () => {
    setisOpenMenu(false)
  }
  
  return (
    <header className="header">
        <h1 onClick={closeMenu} className="header__logo">

          <Link to='/'>
            Academlo
            <span className="header__hotels">Hotels</span>
          </Link>
        </h1>
        <div onClick={handleMenu} className="header__menu">
          <i className="bx bx-menu"></i>
        </div>
        <nav className={`header__nav ${isOpenMenu || 'nav__close'}`}>
            <ul className="header__list">
                <li onClick={closeMenu} className="header__item">
                    <Link to='/reservations'>Reservation</Link>
                </li>
                <li onClick={closeMenu} className="header__item">
                <Link to='/register'>Register</Link>
                </li>
                <li onClick={closeMenu} className="header__item">
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
