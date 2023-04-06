import React from 'react'
import img from './images/image 1.png'

import './intro.css'

const Intro = (props) => {
    const rightClass = props.mode==="dark"?'right':'intro-light right'
    return (
        <section id='intro'>

            <div className="left">
                <div className="rectangle">
                    <span>h.</span>
                    <img src={img} alt="" />

                </div>
            </div>
            <div className={rightClass}>
                <h1>Hamza Suleman</h1>
                <h3>Frontend Web Developer</h3>
                <p>Appealing and Responsive Frontend Development </p>
                <a href='#footer' className='btn'>Contact</a>
            </div>

        </section>
    )
}

export default Intro
