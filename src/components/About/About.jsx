import './About.css';
import {aboutMe} from "../../info";

const About = () => {
    return (
        <section className="about" id="about">
       
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="left">
                    <img src={require('../../assets/img/IMG_3188.JPG')} />
                </div>
                <div className="right">
                    <p className="name">My name is {aboutMe.name} and I'm a {aboutMe.work}.</p>
                    <p>
                        {aboutMe.description}
                    </p>
                    
                    <p>
                        This website is fully depeloped by me, I haven't used any template. 
                        It is done with ReactJS.
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;