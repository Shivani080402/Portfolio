import React ,{useRef} from "react";
import './contact.css';
import automation_framework from '../image/automation_framework.jpg';
import bhn from '../image/BHN.jpg';
import blogging from '../image/blogging.jpg';
import scm from '../image/scm.jpg';
import scorecraze from '../image/scorecraze.jpg';
import sng from '../image/sng.jpg';
import emailjs from '@emailjs/browser';
import naukri from '../image/naukri.png';
import linkdin from '../image/linkdin.png';
import instagram from '../image/instaa.png';
import youtube from '../image/Youtube.png';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Corrected typo here
        emailjs.sendForm('service_6pqy2jv', 'template_hq23eeb', form.current, 'iLFjilZL02qG2Zuzi')
            .then((result) => {
                console.log(result.text);
                e.target.reset(); // Resets the form after successful submission
                alert('Email Sent Successfully!!');
            }, (error) => {
                console.log(error.text);
            });
    };
    return(
      <section id="contactpage">
        <div id = "clients">
            <h1 className="contactpagetitle">Projects Accomplished</h1>
            <p className="clientDesc">Discover projects that highlight my approach to tackling challenges and delivering quality solutions. Each one represents my skills, creativity, and focus on impactful outcomes. </p>
            <div className="clientimgs">
                <span className="imagewithtext"><img src={bhn} alt="" className="clientimg"/>
                <h3>Bharat Housing Network pvt. ltd. </h3></span>
                <span className="imagewithtext"><img src={sng} alt="" className="clientimg"/>
                <h3>Singularity CreditWorld pvt. ltd.</h3></span>
                <span className="imagewithtext"><img src={automation_framework} alt="" className="clientimg"/>
                <h3>Automation Framework</h3></span>
                <span className="imagewithtext"><img src={blogging} alt="" className="clientimg"/>
                <h3>Blogging Application</h3></span>
                <span className="imagewithtext"><img src={scorecraze} alt="" className="clientimg"/>
                <h3>ScoreCraze</h3></span>
                <span className="imagewithtext"><img src={scm} alt="" className="clientimg"/>
                <h3>Smart Contact Manager</h3></span>
                
            </div>
            
        </div>     
     
        <div id ='contact'>
            <h1 className="contactpagetitle">Let's Connect and Collaborate</h1>
            <div className="contactDesc">I'm here to help solve problems, share ideas, and work on meaningful projects. Whether you have a question, a collaboration idea, or just want to connect, <br />I'd love to hear from you. Feel free to reach out!</div>
            <form className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name " name='from_name'/>
                <input type = "text" className="email" placeholder="Your Email" name='from_eamil'/>
                <textarea className = "msg" name ="message " cols="30" rows="5" placeholder="Your Message"  ></textarea>
                <button type="submit" value ="send" className="submitbtn">Submit</button>
                <div className="links">
                    <img src={linkdin} alt="facebook" className="link"/>
                    <img src={naukri} alt="youtube" className="link"/>
                    <img src={instagram} alt="twitter" className="link"/>
                    <img src={youtube} alt="instagram" className="link"/>
                </div>
            </form>
        </div>
      </section>
    );
}

export default Contact;