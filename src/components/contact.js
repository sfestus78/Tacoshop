import React from 'react'
import styles from "./hours.module.css"
import { useNavigate } from "react-router-dom";

export const Contact = () => {
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
        const goAbout = () => {
            navigate("/about")
        }
  return (
    <div className='Contact'>
      <>
        
        <header className="header">
            <h1 className="header__h1">The LIttle Tacos Shop</h1>
            <nav className="header__nav">
            <ul className="header__ul">
                <div onClick={() => goHome()} className={styles.homeButton}>Home</div>
                <div onClick={() => goMenu()} className={styles.menuButton}>Menu</div>
                <div onClick={() => goHours()} className={styles.hoursButton}>Hours</div>
                <div onClick={() => goAbout()} className={styles.contact}>About</div>
            </ul>
            </nav>
        </header>
        <section className="hero">
            <img
            src="img/tacos_close_up_1000x649.png"
            title="tacos closeup"
            alt="ready to eat tacos"
            width={1000}
            height={649}
            />
            <figure>
            <figcaption className="offscreen">Tacos closeup </figcaption>
            </figure>
        </section>
        <main className="main">
            <article className="main__article">
            <h2>Our Location</h2>
            <address>
                555 Taco Temptation Lane,Suite T <br />
                Kansas City, MO 55555-5555
                <br />
                <br />
                Phone: <link to="tel:+23480778976548"></link>
            </address>
            </article>
            <hr />
            <article className="main__article contact">
            <h2 className="contact__h2">Our Contact Form&gt;</h2>
            <form action="https://httpbin.org/get" method="get">
                <fieldset className="contact__fieldset">
                <legend className="offscreen">Send Us A Message</legend>
                <p className="contact__p">
                    <label className="contact__label" htmlFor="name">
                    Name:
                    </label>
                    <input
                    className="contact__input"
                    type="text"
                    name="yourName"
                    id="yourName"
                    placeholder="James Brown"
                    autoComplete="on"
                    required=""
                    autoFocus=""
                    />
                </p>
                <p className="contact__p">
                    <label className="contact__label" htmlFor="email">
                    Email:{" "}
                    </label>
                    <input
                    className="contact__input"
                    type="email"
                    id="email"
                    pattern=".+@example\.com"
                    placeholder="john@mail.com"
                    size={30}
                    required=""
                    />
                </p>
                <p className="contact__p">
                    <label className="contact__label" htmlFor="message">
                    Your Message:
                    </label>
                    <textarea
                    className="contact__textarea"
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Type your message here"
                    defaultValue={""}
                    />
                </p>
                </fieldset>
                <button className="contact__button" type="submit">
                Send
                </button>
                <button className="contact__button" type="reset">
                Reset
                </button>
            </form>
            </article>
            <p>
            <link to="/"></link>
            </p>
        </main>
        <footer className="footer">
            <p>
            <span className="nowrap">Copyright ©</span>{" "}
            <span className="nowrap">Little Taco Shop</span>
            </p>
        </footer>
        </>

    </div>
  )
}

export default Contact
