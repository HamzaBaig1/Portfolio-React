import React from 'react'
import IMG from './images/h.png'
import IMG1 from './images/dot.png'
import IMG2 from './images/fb.png'
import IMG3 from './images/insta.png'
import IMG4 from './images/li.png'
import IMG5 from './images/github.png'
import './footer.css'
const Footer = (props) => {
  const classes = props.mode === 'dark' ? 'email' : 'email footer-light'
  return (
    <>
      <section id='footer'>
        <div className="logo">
          <img src={IMG} alt="" />
          <img src={IMG1} alt="" />
        </div>
        <div className="contact">
          <div className={classes}>
            <h4>hamzasuleman010@gmail.com</h4>
          </div>
          <div className="socials">
            <a href="https://m.me/hamza.suleman.14" target='_blank' rel='noreferrer'><img src={IMG2} alt="" /></a>
            <a href="https://www.instagram.com/hamzaa._.baig/"  target='_blank' rel='noreferrer'><img src={IMG3} alt="" /></a>
            <a href="https://www.linkedin.com/in/hamza-suleman-3b7766249/" target='_blank' rel='noreferrer'><img src={IMG4} alt="" /></a>
            <a href="https://github.com/HamzaBaig1" target='_blank' rel='noreferrer'><img src={IMG5} alt="" /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
