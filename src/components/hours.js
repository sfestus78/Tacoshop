import React from "react";
import styles from "./hours.module.css"
import { useNavigate } from "react-router-dom";

// import {Link } from "react-router-dom";
import "../index.css";

export const Hours = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate("/")
  }
  const goMenu = () => {
    navigate("/menu")
  }
  const goAbout = () => {
    navigate("/about")
  }
  const goContact = () => {
    navigate("/contact")
  }
  return (
    <div className="Hours">
      <>
        <header className="header">
          <h1 className="header__h1"> LIttle Tacos Shop</h1>
          <nav className="header__nav">
            <ul className="header__ul">
              
                <div onClick={() => goHome()} className={styles.homeButton}>Home</div>
                <div onClick={() => goMenu()} className={styles.menuButton}>Menu</div>        
                <div onClick={() => goAbout()} className={styles.hoursButton}>About</div>
                <div onClick={() => goContact()} className={styles.contactButton}>Contact</div>
              
            </ul>
          </nav>
        </header>
        <section className="hero">
          <figure>
            <img
              src="img/tacos_tray_1000x667.png"
              alt="tacos tray"
              title="tacos and drink"
              width={1000}
              height={667}
            />
            <figcaption className="offscreen">Tacos Tray</figcaption>
          </figure>
        </section>
        <main className="main">
          <article className="main__article">
            <h2>Hours</h2>
            <p>We are open 7 days a week!</p>
            <dl>
              <dt>sunday - Thursday</dt>
              <dd> 11 am -9pm</dd>
              <dt>Friday-Saturday</dt>
              <dd>11am-11pm</dd>
            </dl>
          </article>
        </main>
        <p>
          <link to="/"></link>
        </p>
        <footer className="footer">
          <p>
            <span className="nowrap">
              Copyright © <time id="year" />
            </span>
            <span className="nowrap">Little Taco Shop</span>
          </p>
        </footer>
      </>
    </div>
  );
};

export default Hours;
