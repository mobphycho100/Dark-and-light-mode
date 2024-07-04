// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const classValue = isDarkTheme ? 'dark' : 'light'
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={`navbar-${classValue}`}>
          <img src={logoUrl} alt="website logo" className="logo" />
          <ul className={`nav-list-container-${classValue}`}>
            <Link to="/" className={`nav-list-items-${classValue}`}>
              <li>Home</li>
            </Link>
            <Link to="/about" className={`nav-list-items-${classValue}`}>
              <li>About</li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            type="button"
            onClick={toggleTheme}
            className="button"
          >
            <img src={themeImgUrl} alt="theme" className="theme-image" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
