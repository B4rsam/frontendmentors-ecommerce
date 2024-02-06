import NavBar from "./components/NavBar/NavBar"
import s from './App.module.sass'
import PictureSection from "./components/Pictures/Pictures"
import ContentSection from "./components/Content/Content"

function App() {

  return (
    <div>
      <NavBar />
      <div className={s.mainBody}>
        <PictureSection />
        <ContentSection />
      </div>
    </div>
  )
}

export default App

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