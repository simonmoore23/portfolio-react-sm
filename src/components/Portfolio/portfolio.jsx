import React from 'react';
import './portfolio.css';
import Portfolio1 from '../../assets/clowning.png';
import Portfolio2 from '../../assets/code-quiz.png';
import Portfolio3 from '../../assets/disney-quiz.png';
import Portfolio4 from '../../assets/password-gen.png';
import Portfolio5 from '../../assets/weather-dashboard.png';
import Portfolio6 from '../../assets/work-sched.png';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2 className="portfolioTitle">Portfolio</h2>
            <span className="portfolioDescription">Here are some examples for my frontend development work.</span>
            <div className="portfolioImgs">
            <img src={Portfolio1} alt="" className="portfolioImg" />
            <img src={Portfolio2} alt="" className="portfolioImg" />
            <img src={Portfolio3} alt="" className="portfolioImg" />
            <img src={Portfolio4} alt="" className="portfolioImg" />
            <img src={Portfolio5} alt="" className="portfolioImg" />
            <img src={Portfolio6} alt="" className="portfolioImg" />
            </div>
            <button className="portfolioBtn">See More</button>
        </section>
    );
}

export default Portfolio