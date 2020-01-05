import React from 'react';
import {Link} from 'react-router-dom'
import "../css/Home.css"

function Home() {
  return (
    <main className="wrapper">
        <article className="resume">
            <section className="grid-area name">
                <div className="centred-wrapper">
                    <div className="centred">
                        <h1>Thanh Hung Le</h1>
                        Student at <a href="https://fit.cvut.cz/">FIT CTU Prague</a> - Software and Web Engeneering
                    </div>
                </div>
            </section>
            <section className="grid-area photo">
                <div className="circle"> </div>
            </section>
            <section className="grid-area skills">
                <div className="centred-wrapper">
                    <div className="centred">
                        <h3>Skills</h3>
                        <ul className="skill_list">
                            <li>HTML5 and CSS3</li>
                            <li>Javascript (ES6)</li>
                            <li>React</li>
                            <li>SQL</li>
                            <li>PHP</li>
                            <li>C, C++</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="grid-area work">
            <div className="centred-wrapper">
                    <div className="centred">
                        <h2>Work</h2>
                        Junior Software Developer at <a href="https://unicorn.com/cs/">Unicorn</a> <br/>
                        (Hatchery 6/2019 - 8/2019)
                        <hr /> <br />
                        <h4>React micro-projects:</h4>
                        <Link to='/MemeGenerator'> Meme Generator </Link> <br/>
                        <Link to='/TodoList'> TodoList </Link>
                    </div>
                </div>
            </section>
            <section className="grid-area education">
                <div className="centred-wrapper">
                    <div className="centred">
                        <h3>Education</h3>
                        Exchange student at <a href="https://www.ntu.edu.sg/Pages/home.aspx">Nanyang Technological University Singapore</a> <br/>
                        (8/2019 - 12/2019)
                        <br />
                        <br />
                        <a href="https://www.gymcheb.cz/">Gymnazium Cheb</a> <br/>
                        (2009 - 2016)
                    </div>
                </div>
            </section>
            <section className="grid-area about">
                <div className="centred-wrapper">
                    <div className="centred">
                        More at:
                        <a href="https://www.linkedin.com/in/thanh-hung-le/"><img className="linkedin" src={require("../media/LI-Logo.png")} alt="linkedin"></img></a>
                    </div>
                </div>
            </section>
            <section className="grid-area community">
                <div className="centred-wrapper">
                    <div className="centred">
                        For spring/summer 2020 will become IT Coordinator at <a href="https://isc.cvut.cz/">International Student Club CTU in Prague</a>
                    </div>
                </div>
    
            </section>
        </article>
    </main>
   
  );
}

export default Home;
