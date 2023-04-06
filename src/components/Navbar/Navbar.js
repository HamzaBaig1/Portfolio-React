import React, { useState } from 'react'
import './navbar.css'
import sun from './images/sun.png'
import moon from './images/moon.png'

const Navbar = (props) => {
  const [color, setColor] = useState(false)
  const classes = props.mode === 'dark' ? 'navbar' : 'navbar navbar-light'
  const class2 = color === true ? 'bg-change' : ' '
  const img = props.mode === 'dark' ? sun : moon;
 
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  return (

    <nav className={`${classes} ${class2}`}>

      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
      <a href='Hamza suleman Resume.pdf' download='Hamza Suleman Resume.pdf'>Resume</a>

      <img className='img' src={img} alt="" onClick={props.modeChangeHandler} />



    </nav>


  )
}

export default Navbar
