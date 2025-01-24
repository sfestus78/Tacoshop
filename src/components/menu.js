import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./menu.module.css"

export const Menu = () => {
  const navigate = useNavigate()
    const goHome = () => {
        navigate("/")
    }
    
    const goHours = () => {
        navigate("/hours")
    }
    const goAbout = () => {
        navigate("/about")
    }
    const goContact = () => {
      navigate("/contact")
    }
  return (
    <>
  
  <header className="header">
    <h1 className="header__h1">LIttle Tacos Shop</h1>
    <nav className="header__nav">
      <ul className="header__ul">
        
          <div onClick={() => goHome()} className={styles.homeButton}>Home</div>
          <div onClick={() => goHours()} className={styles.hoursButton}>Hours</div>
          <div onClick={() => goAbout()} className={styles.aboutButton}>About</div>
          <div onClick={() => goContact()} className={styles.contactbutton}>Contact</div>
        
      </ul>
    </nav>
  </header>
  <main className="main">
    <article id="menu" className="main__article menu">
      <h2 className="menu__h2"> Our Menu</h2>
      <table className="menu__container">
        <caption className="offscreen"> Our Tacos</caption>
        <thead>
          <tr>
            <th className="menu__header" scope="col">
              Tacos
            </th>
            <th className="menu__header" scope="col">
              Quantity
            </th>
            <th className="menu__header" scope="col">
              Prices
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="menu__item menu__cr" scope="row" rowSpan={3}>
              Crunchy
            </th>
            <td className="menu__item">1</td>
            <td className="menu__item">$1.50</td>
          </tr>
          <tr>
            <td className="menu__item">2</td>
            <td className="menu__item">$2.50</td>
          </tr>
          <tr>
            <td className="menu__item">3</td>
            <td className="menu__item">$3.25</td>
          </tr>
          <tr>
            <th className="menu__item menu__sf" scope="row" rowSpan={3}>
              Soft
            </th>
            <td className="menu__item">1</td>
            <td className="menu__item">$2.00</td>
          </tr>
          <tr>
            <td className="menu__item">2</td>
            <td className="menu__item">$3.50</td>
          </tr>
          <tr>
            <td className="menu__item">3</td>
            <td className="menu__item">$9.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="menu__item menu__cs" colSpan={3}>
              Chips &amp; Salsa $2
            </td>
          </tr>
        </tfoot>
      </table>
      <p className="center">
        {" "}
        <link to="/"></link>
      </p>
    </article>
  </main>
  <br />
  <p>
    <link to="/"></link>
  </p>
  <footer className="footer">
    <p>
      <span className="nowrap">Copyright ©</span>{" "}
      <span className="nowrap">Little Taco Shop</span>
    </p>
  </footer>
</>

  )
}

export default Menu
