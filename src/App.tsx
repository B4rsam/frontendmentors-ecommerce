import NavBar from "./components/NavBar/NavBar"
import s from './App.module.sass'
import PictureSection from "./components/Pictures/Pictures"
import ContentSection from "./components/Content/Content"
import useViewController from "./utils/useViewController"

function App() {
  const {
    productCount,
    cartCount,
    handleQuantity,
    handleAddToCart,
    handleTrash
  } = useViewController()

  return (
    <div>
      <NavBar cartCount={cartCount} handleTrash={handleTrash}/>
      <div className={s.mainBody}>
        <PictureSection />
        <ContentSection count={productCount} handleQuantity={handleQuantity} handleAddToCart={handleAddToCart}/>
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