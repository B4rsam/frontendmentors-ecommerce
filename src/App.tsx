import NavBar from "./components/NavBar/NavBar"
import s from './App.module.sass'

function App() {

  return (
    <div>
      <NavBar />
      <div className="mainBody">
        <div className="contentSection">
          <div className={s.textBox}>
            <h4 className={s.brandText}>Sneaker Company</h4>
            <h1 className={s.label}>Fall Limited Edition Sneakers</h1>
            <p className={s.desc}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <h2>$125.00</h2>
          </div>
          <div className={s.cartBox}>
          </div>
        </div>
        <div className="pictureSection">
        </div>
      </div>
    </div>
  )
}

export default App

//nav bar
//  logo
//  buttons
//  cart
//  avatar

//body
//  big pics
//  other pics
//  brand
//  title
//  desc
//  price and discount
//  full price
//  quantity
//  add