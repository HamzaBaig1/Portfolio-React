import React from 'react'
import './portfolio.css'
import IMG1 from './images/img.png'
import IMG2 from './images/img2.png'
import IMG3 from './images/img3.png'
import IMG4 from './images/img4.png'
import IMG5 from './images/img5.png'
import IMG6 from './images/img6.png'
import expense from './images/expense.png'
import news from './images/news.png'
import cal from './images/cal.png'


const Portfolio = (props) => {
    const data = [
        {
            id: '1',
            title: 'Xavro',
            img: IMG1,
            github: 'https://github.com/HamzaBaig1/Projects/tree/main/XAVRO'
        },
        {
            id: '2',
            title: 'Abelton',
            img: IMG2,
            github: 'https://github.com/HamzaBaig1/Projects/tree/main/Ableton'
        },
        {
            id: '3',
            title: 'Insure',
            img: IMG4,
            github: 'https://github.com/HamzaBaig1/Projects/tree/main/insure-landing-page-master/insure-landing-page-master'
        },
        {
            id: '4',
            title: 'Fylo',
            img: IMG3,
            github: 'https://github.com/HamzaBaig1/Projects/tree/main/fylo-dark-theme-landing-page-master/fylo-dark-theme-landing-page-master'
        },
        {
            id: '5',
            title: 'Expense Calculator',
            img: expense,
            github: 'https://github.com/HamzaBaig1/expense-calculator'
        },
        
        {
            id: '6',
            title: 'Daily News',
            img: news,
            github: 'https://github.com/HamzaBaig1/Projects/tree/main/News%20App'
        },
        {
            id: '7',
            title: 'Abstract',
            img: IMG6,
            github: 'https://github.com/HamzaBaig1/Projects/tree/main/Abstract'
        },
      
        {
            id: '8',
            title: 'Four Card',
            img: IMG5,
            github: 'https://github.com/HamzaBaig1/Projects/tree/main/four-card-feature-section-master/four-card-feature-section-master'
        },
      
        {
            id: '9',
            title: 'Calculator',
            img: cal,
            github: 'https://github.com/HamzaBaig1/Projects/tree/main/Calculator'
        },
      
    ]
    const classes = props.mode==='dark'?"portfolio-item":"portfolio-item portfolio-light"
    const headClass = props.mode==='dark'?'':'portfolio-black'
    return (
        <section id='portfolio'>
            <h1 className={headClass}>Portfolio</h1>

            <div className="portfolio-container">
                {data.map(data => {
                    return (
                       
                        <div key={data.id} className={classes}>
                            <div className="portfolio-img">
                                <img src={data.img} alt={data.title} />
                            </div>
                            <h3>{data.title}</h3>
                            {/* //eslint-disable-next-line */}
                            <a href={data.github} rel="noreferrer" target='_blank'>Github</a>
                        </div>
                       

                    )
                })}
                
            </div>


            <hr className='h-line' />
        </section>
    )
}

export default Portfolio
