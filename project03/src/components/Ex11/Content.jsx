import React, { useContext } from 'react'
import { themeContext } from '../../context/EX11ThemeContext'

const Content = () => {

  const {isDark}=useContext(themeContext)

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black":"white",
        color: isDark ? "white":"black",
      }}
    >
      <h1>지각하지 않기! 결석하지 않기!</h1>
    </div>
  )
}

export default Content