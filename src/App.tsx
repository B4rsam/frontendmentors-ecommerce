import NavBar from "./components/NavBar/NavBar"
import s from './App.module.sass'
import PictureSection from "./components/Pictures/Pictures"

function App() {

  return (
    <div>
      <NavBar />
      <div className={s.mainBody}>
        <PictureSection />
        <div className="contentSection">
          <div className={s.textBox}>
            <h4 className={s.brandText}>Sneaker Company</h4>
            <h1 className={s.label}>Fall Limited Edition Sneakers</h1>
            <p className={s.desc}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
          </div>
          <div className={s.cartBox}>
          </div>
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