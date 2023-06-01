import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutContainer = isDarkTheme
        ? 'about-container light-about'
        : 'about-container dark-about'
      const aboutImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
      const aboutHeading = isDarkTheme
        ? 'heading light-about-heading'
        : 'heading dark-about-heading'

      return (
        <>
          <Navbar />
          <div className={aboutContainer}>
            <div className="about-responsive-container">
              <img src={aboutImgUrl} alt="about" className="about-img" />
              <h1 className={aboutHeading}>About</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
