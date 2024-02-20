import React, { useContext } from 'react'
import { themeContext } from '../../context/EX11ThemeContext';

const Footer = () => {
  const {isDark,setIsDark} = useContext(themeContext)
  const toggleTheme = () => {
    // if(isDark) {
    //   setIsDark(false)
    // } else {
    //   setIsDark(true)
    // }
    setIsDark(!isDark)
  };
  return (
    <div>
      <footer
        className="footer"
        style={{
          backgroundColor: isDark ? "black":"lightgray",
        }}
      >
        <button className="button" onClick={toggleTheme}>
          {isDark ?  <span>LightMode</span> : <span>DarkMode</span> }
        </button>
      </footer>
    </div>
  )
}

export default Footer