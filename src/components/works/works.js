import React from "react";
import './works.css';
import mysql from '../image/mysql.png';
import phpunit from '../image/php.png';
import mongoDB from '../image/mongo.png';
import reactjs from '../image/reactjss.webp';
import spring from '../image/spring.jpg';
import html from '../image/html.png';
import java from '../image/java.png';

const Works = () => {
    return(
      <section id ='works'>
        <h2 className="worktitle">Tech Stack</h2>
        <span className="worksdesc">I am proficient in the following technologies and tools, and I am continually gaining experience and learning new skills.</span>
        <div className="workimgs">
            <img src= {spring} alt="" className="worksimg"/>
            <img src= {java} alt="" className="worksimg"/>
            <img src= {reactjs} alt="" className="worksimg"/>
            <img src= {mongoDB} alt="" className="worksimg"/>
            <img src= {phpunit} alt="" className="worksimg"/>
            <img src= {mysql} alt="" className="worksimg"/>
            <img src= {html} alt="" className="worksimg"/>
        </div>
        
      </section>
    )
}

export default Works;