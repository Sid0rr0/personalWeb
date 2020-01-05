import React from 'react';
import {Link} from 'react-router-dom'
import TodoList from './TodoList';
import MemeGenerator from './MemeGenerator';
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
                <div className="circle"></div>
            </section>
            <section className="grid-area skills">
                <div className="centred-wrapper">
                    <div className="centred">
                        <h3>Skills</h3>
                        <ul>
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
                        <Link to='/MemeGenerator'> Meme Generator </Link> <br/>
                        <Link to='/TodoList'> TodoList </Link>
                    </div>
                </div>
            </section>
            <section className="grid-area education">
                <div className="centred-wrapper">
                    <div className="centred">
                        <h3>Education</h3>
                        Exchange student at <a href="https://www.ntu.edu.sg/Pages/home.aspx">Nanyang Technological University Singapore</a>
                        <br />
                        <br />
                        Gymnazium Cheb
                    </div>
                </div>
            </section>
            <section className="grid-area about">
                <div className="centred-wrapper">
                    <div className="centred">
                        <h3>About</h3>
                    </div>
                </div>
            </section>
            <section className="grid-area community">
                
            </section>
        </article>
    </main>
   
  );
}

export default Home;
