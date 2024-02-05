import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import Avatar from "../Avatar/Avatar"
import s from './navbar.module.sass'

const NavBar = () => {
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
                <Button type="icon" children="a"/>
                <Avatar />
            </div>
        </div>
    )
}

export default NavBar