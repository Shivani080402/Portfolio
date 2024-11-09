import React from "react";
import './skills.css';
import java from '../image/java-backend.jpg';
import react from '../image/react.jpg';
import fullStack from '../image/full-stack.jpg';
import Automation from '../image/Automation.jpg';



const Skills = () => {
    return (
        <section id='skills'>
            <span className="skilltitle">What I do</span>
            <span className="skilldesc">Dedicated Software Developer with a strong background in Web Development, Unit Testing, API Integration, and Backend API Automation.Results-oriented Software Developer with a proven track record in delivering high-quality web applications. Proficient in unit testing, API integration, and backend automation.</span>
            <div className="skillbars">
                <div className="skillbar">
                    <img src={Automation} alt="" className="skillbarimg" />
                    <div className="skillbartext">
                        <h2>Java Backend Developer</h2>
                        <p className="para">Skilled in developing robust and scalable backend applications using Java, Spring Boot, and Spring MVC. Experienced in designing and implementing RESTful APIs, integrating with MySQL databases, and writing efficient unit tests.</p>
                    </div>

                </div>
                <div className="skillbar">
                    <img src={react} alt="" className="skillbarimg" />
                    <div className="skillbartext">
                        <h2> React.js Developer</h2>
                        <p className="para">Proficient in building dynamic and interactive user interfaces using React.js, HTML, and CSS. Experienced in creating web applications and have a solid understanding of React's core concepts</p>
                    </div>

                </div>
                <div className="skillbar">
                    <img src={fullStack} alt="" className="skillbarimg" />
                    <div className="skillbartext">
                        <h2>Full-Stack Developer</h2>
                        <p className="para">I have experience with Java for backend development and React for frontend, along with proficiency in both SQL and NoSQL databases. I am actively expanding my skill set as I continue learning and growing in the field.</p>
                    </div>

                </div>

                <div className="skillbar">
                    <img src={java} alt="" className="skillbarimg" />
                    <div className="skillbartext">
                        <h2>Automation Engineer</h2>
                        <p className="para">
                        As an Automation Engineer, during my internship, I gained skills in both backend and frontend automation. With automation, I was able to reduce the time required to test the entire workflow from 20 minutes to just 2 minutes in backend API automation.</p>
                    </div>

                </div>
            </div>
          
        </section>
    )
}

export default Skills;