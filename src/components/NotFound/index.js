import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const randomContainer = isDarkTheme
        ? 'random-container light-random'
        : 'random-container dark-random'
      const randomHeading = isDarkTheme
        ? 'heading light-random-heading'
        : 'heading dark-random-heading'

      return (
        <>
          <Navbar />
          <div className={randomContainer}>
            <div className="random-responsive-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
                alt="not found"
                className="random-img"
              />
              <h1 className={randomHeading}>Lost Your Way?</h1>
              <p className="description">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
