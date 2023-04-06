import React from 'react'
import './about.css'

const About = (props) => {
    const classes = props.mode==='dark'?'':'about-light';
        return (
        <section id='about'>
            <h1 className={classes}>About</h1>
            <p className={classes}>Hi, I'm a Frontend Web Developer. I started my professional career as an IT Intern and then as IT Networking Officer. Later on I decided to shift my focus on Web Development and most specifically towards Frontend Web Development , so I learned Frontend Web Development skills such as HTML , CSS , BOOTSTRAP and basics of JAVASCRIPT. I have worked on different beginner projects on my own to get good understanding of frontend development tools and technologies and I am looking forward to grow my career in the field of Web Development.</p>
        </section>
    )
}

export default About
