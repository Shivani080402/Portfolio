import React from 'react';
import'./intro.css';
import bhn from '../image/contactme.png';
import bg from '../image/image.png';


const Intro = () => {
    return (
        <section id ="intro">
            <div className='intocontent'>
                <span className='hello'>Hello,</span>
                <span className='intotext'>I'm <span className='introname'>Shivani Gupta</span><br />
               Software Developer</span>

                <p className='intopara'>I am an enthusiastic web developer focused on crafting impactful solutions <br />that simplify and enhance daily life. I’m always eager to tackle complex  <br/>problems and create web experiences that truly resonate.
</p>
                <a href="https://www.linkedin.com/in/shivani-g08" target="_blank" rel="noopener noreferrer">
                    <button className='btn'>
                        <img src={bhn} alt="hire me" className='btnImg' />
                        Connect With Me
                    </button>
                </a>
                <a href="https://github.com/Shivani080402/ScoreCraze" target="_blank" rel="noopener noreferrer" className="linkButton">
                        GitHub
                    </a>
            </div>
            <img src={bg} alt = "profile" className='bg' />

        </section>
    )
}

export default Intro