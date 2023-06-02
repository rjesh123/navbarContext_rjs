import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainer = isDarkTheme
        ? 'home-container dark-home'
        : 'home-container light-home'
      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeHeading = isDarkTheme
        ? 'heading dark-home-heading'
        : 'heading light-home-heading'

      return (
        <>
          <Navbar />
          <div className={homeContainer}>
            <div className="home-responsive-container">
              <img src={homeImgUrl} alt="home" className="home-img" />
              <h1 className={homeHeading}>Home</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
