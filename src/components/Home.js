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
                Thanh Hung Le
            </section>
            <section className="grid-area photo">
            <div className="circle"></div>
            </section>
                <section className="grid-area about">
                <hr/>
                <hr/>
            </section>
            <section className="grid-area work">
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
            </section>
            <section className="grid-area education">
                <Link to='/MemeGenerator'> Meme Generator </Link>
            </section>
            <section className="grid-area skills">
                <Link to='/TodoList'> TodoList </Link>
            </section>
            <section className="grid-area community">
                
            </section>
        </article>
    </main>
   
  );
}

export default Home;
