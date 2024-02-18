import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import Avatar from "../Avatar/Avatar"
import s from './navbar.module.sass'
import CartModal from "../Modal/CartModal/CartModal"
import { FC, HTMLAttributes, useState } from "react"

interface INav extends HTMLAttributes<HTMLDivElement> {
    cartCount: any;
    handleTrash: () => void;
}

const NavBar : FC<INav>= ({cartCount, handleTrash}) => {
    const [showModal, setShow] = useState(false)
    const handleModal = () => {
        setShow(!showModal)
        console.log("a")
    }

    return (
        <div className={s.navBar}>
            <div className={s.leftBox}>
                <Button className={s.menuButton} type="icon" icon="menu"/>
                <Logo className={s.logo}/>
                <div className={s.buttonBox}>
                    <Button className={s.button} type="navbar" children="Collections"/>
                    <Button className={s.button} type="navbar" children="Men"/>
                    <Button className={s.button} type="navbar" children="Women"/>
                    <Button className={s.button} type="navbar" children="About"/>
                    <Button className={s.button} type="navbar" children="Contact"/>
                </div>
            </div>
            <div className={s.rightBox}>
                <div className="cartModalHolder">
                    <Button type="icon" children="a" className={s.cartButton} icon="cart" onClick={handleModal}/>
                    {showModal ? <CartModal count={cartCount} handleTrash={handleTrash}/> : null}
                </div>
                
                <Avatar />
            </div>
        </div>
    )
}

export default NavBar