import React from "react";
import "./Hero.css"
function Hero(){


    return (
        <section className="container">
            <div className="content">
                <h1 className="title">
                    Hi! I'm Jeena!
                </h1>
                <p className="description">I'm a Software Developer.</p>
            </div>
            <span role="img" aria-label="hero" className="heroImg">
            💻
      </span>
        </section>
    )
}

export default Hero;