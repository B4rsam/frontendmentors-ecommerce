import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import Avatar from "../Avatar/Avatar"
import s from './navbar.module.sass'
import CartModal from "../Modal/CartModal/CartModal"
import { FC, HTMLAttributes, useState } from "react"

interface INav extends HTMLAttributes<HTMLDivElement> {
    cartCount: any;
}

const NavBar : FC<INav>= ({cartCount}) => {
    const [showModal, setShow] = useState(false)
    const handleModal = () => {
        setShow(!showModal)
        console.log("a")
    }

    return (
        <div className={s.navBar}>
            <div className={s.leftBox}>
                <Logo />
                <div className="buttons">
                    <Button type="navbar" children="Collections"/>
                    <Button type="navbar" children="Men"/>
                    <Button type="navbar" children="Women"/>
                    <Button type="navbar" children="About"/>
                    <Button type="navbar" children="Contact"/>
                </div>
            </div>
            <div className={s.rightBox}>
                <Button type="icon" children="a" className={s.cartButton} icon="cart" onClick={handleModal}/>
                <Avatar />
            </div>
            {showModal ? <CartModal count={cartCount}/> : null}
        </div>
    )
}

export default NavBar