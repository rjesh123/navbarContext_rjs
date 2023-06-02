import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)

      const aboutContainer = isDarkTheme
        ? 'about-container dark-about'
        : 'about-container light-about'
      const aboutImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutHeading = isDarkTheme
        ? 'heading dark-about-heading'
        : 'heading light-about-heading'

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
