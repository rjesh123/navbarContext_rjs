import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navbarBgClassName = isDarkTheme
        ? 'navbar-container light-nav'
        : 'navbar-container dark-nav'
      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      const themeLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
      const linkClassName = isDarkTheme ? 'link dark-color' : 'link light-color'
    
      const onChangeToggleTheme = event => {
        toggleTheme(event.target.value)
      }

      return (
        <div className={navbarBgClassName}>
          <div className="navbar-responsive-container">
            <img
              src={websiteLogoUrl}
              alt='website logo'
              className="website-logo"
            />
            <ul className="link-items-container">
              <li className="link-item">
                <Link to="/" className={linkClassName}>
                  Home
                </Link>
              </li>
              <li className="link-item">
                <Link to="/about" className={linkClassName}>
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              data-testid="theme"
              onClick={onChangeToggleTheme}
              className="theme-button"
            >
              <img
                src={themeLogoUrl}
                alt='theme'
                className="theme-img"
              />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
