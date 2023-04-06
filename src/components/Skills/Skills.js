import React from 'react'
import Card from '../UI/Card'
import './skill.css'
import './sb.css'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import bs from './images/bs.png'
import react from './images/react.png'

const Skills = (props) => {
    const data = [
        {
            id:'1',
            img: html,
            title: 'HTML'
        },
        {
            id:'2',
            img: css,
            title: 'CSS'
        },
        {
            id:'3',
            img: bs,
            title: 'BOOTSTRAP'
        },
        {
            id:'4',
            img: js,
            title: 'JAVASCRIPT'
        },
      
        {
            id:'5',
            img: react,
            title: 'REACT'
        },
    ]
    const classes = props.mode==='dark'?'skill-box':'skill-box skills-light'
    const headClass = props.mode==='dark'?'':'skills-black'
    return (
        <section id='skills'>
            <h1 className={headClass}>My Skills</h1>
            <div className={classes}>
                {data.map(data => {
                    return (
                        <Card key={data.id} className='skill-b'>
                            <img src={data.img} alt="" />
                            <h2>{data.title}</h2>
                        </Card>
                    )
                })}

            </div>
        </section>
    )
}

export default Skills
