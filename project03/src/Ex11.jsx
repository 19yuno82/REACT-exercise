import React, { useState } from 'react'
import Header from './components/Ex11/Header'
import Footer from './components/Ex11/Footer'
import Content from './components/Ex11/Content'
import './Ex11.css'
import { themeContext } from './context/EX11ThemeContext'

const Ex11 = () => {

  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <themeContext.Provider value={{isDark, setIsDark}}>
        <Header />
        <Content />
        <Footer />
      </themeContext.Provider>
    </div>
  )
}

export default Ex11