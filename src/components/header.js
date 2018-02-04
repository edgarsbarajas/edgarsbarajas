import React from 'react'

// Components
import Menu from './menu'

// CSS
import '../styles/header.css'

const Header = () => {
  return(
    <header>
      <Menu/>
      <img src='/photos/header/logo.png' alt='logo'/>
    </header>
  )
}

export default Header;
