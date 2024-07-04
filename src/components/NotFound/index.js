// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const classValue = isDarkTheme ? 'dark' : 'light'

        return (
          <div className={`not-found-container-${classValue}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={`not-found-heading-${classValue}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-para-${classValue}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
