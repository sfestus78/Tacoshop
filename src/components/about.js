// src/components/About.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../index.css'; // Adjust path based on your file organization
import styles from "./about.module.css"

export const About = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate("/")
    }
    const goMenu = () => {
        navigate("/menu")
    }
    const goHours = () => {
        navigate("/hours")
    }
    const goContact = () => {
        navigate("/contact")
    }
   
  return (
    <div className="About">
        <>
    
        <header className="header">
            <h1 className="header__h1">Little Tacos Shop</h1>
            <nav className="header__nav">
            <ul className="header__ul">
                <div onClick={() => goHome()} className={styles.homeButton}>Home</div>
                <div onClick={() => goMenu()} className={styles.menuButton}>Menu</div>
                <div onClick={() => goHours()} className={styles.hoursButton}>Hours</div>
                <div onClick={() => goContact()} className={styles.contactButton}>Contact</div>
                
            </ul>
            </nav>
        </header>

        <section className="hero">
            <figure>
            <img
                src="img/tacos_delicioso_1000x667.png"
                alt="delicious tacos"
                title="tacos delicious"
                width="1000"
                height="667"
            />
            <figcaption className="offscreen">Try this Tacos</figcaption>
            </figure>
        </section>

        <main className="main">
            <article id="about" className="main__article about">
            <h2>About <abbr title="The little taco shop">LTS</abbr></h2>
            <p>
                <abbr title="The Little Taco Shop">LTS</abbr> was founded in{" "}
                <time dateTime="2022">2022</time>. Our shop was built from a{" "}
                <strong>love of tacos</strong> 🌮🌮🌮. We hope our shop adds a unique and
                interesting place to our little town.
            </p>
            </article>

            <aside className="about__trivia">
            <h3>Taco Trivia</h3>
            <details>
                <summary>When did tacos first appear in the United States?</summary>
                <p className="trivia-answer">Tacos were first introduced to the US in 1905</p>
            </details>
            </aside>

            <br />
            <p><Link to="/">Home</Link></p>
        </main>

        <footer className="footer">
            <p>
            <span className="nowrap">Copyright &copy;</span>{" "}
            <span className="nowrap">Little Taco Shop</span>
            </p>
        </footer>
        </>
    </div>
  );
};

export default About;