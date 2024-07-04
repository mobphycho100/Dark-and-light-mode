// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const classValue = isDarkTheme ? 'dark' : 'light'
        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

        return (
          <div className={`bg-container-${classValue}`}>
            <img src={imageUrl} alt="about" className="main-image" />
            <h1>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
