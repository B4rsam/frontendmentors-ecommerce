import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import Avatar from "../Avatar/Avatar"

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="leftBox">
                <Logo />
                    <div className="buttons">
                        <Button type="navbar" children="Collections"/>
                        <Button type="navbar" children="Men"/>
                        <Button type="navbar" children="Women"/>
                        <Button type="navbar" children="About"/>
                        <Button type="navbar" children="Contact"/>
                    </div>
            </div>
            <div className="rightBox">
                <Button />
                <Avatar />
            </div>
        </div>
    )
}

export default NavBar