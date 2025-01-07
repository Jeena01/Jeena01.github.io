
import React from "react";
function About() {
    return (
        <section className="container">
            <h2 className="title">
                About
            </h2>
            <div className="title">
                <span role="img" className="aboutImage">
                    📖
                </span>
                <ul className="aboutItems">
                    <li className="aboutItem">
                        <span role="img">
                        🎓
                        </span>
                        <div className="aboutItemText">
                            <h3>Researcher & Developer</h3>
                            <p>
                            Currently pursuing a Bachelors in Computer Science at UBC. 
                            My academic foundation includes machine learning, web development, and network systems, preparing me to tackle complex software challenges.
                            </p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <span role="img">
                        ⚙️ 
                        </span>
                        <div className="aboutItemText">
                            <h3>Innovative Problem-Solver</h3>
                            <p>
                             I’ve led and participated in impactful projects, from developing an LLM analytics tool for a research project 
                            to winning hackathons with culturally mindful solutions. 
                            Proficient in various frameworks, I enjoy blending research and practical development.
                            Currently Software Lead for 
                            </p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <span role="img">
                        🏆
                        </span>
                        <div className="aboutItemText">
                            <h3>Recognized Achiever</h3>
                            <p>
                             Dean’s List honoree, scholarship recipient, and first author of a research paper on code-generating LLMs. 
                            I’m passionate about creating technology that drives meaningful change and advances scientific understanding.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;