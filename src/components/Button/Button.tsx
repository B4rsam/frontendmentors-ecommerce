import { FC, HTMLAttributes, ReactNode } from "react"
import cart from '../../assets/icons/icon-cart.svg'
import close from '../../assets/icons/icon-close.svg'
import next from '../../assets/icons/icon-next.svg'
import back from '../../assets/icons/icon-previous.svg'
import trash from '../../assets/icons/icon-delete.svg'
import menu from '../../assets/icons/icon-menu.svg'
import s from './button.module.sass';

type btnTypes= "primary" | "navbar" | "icon" | "picture" | "normal";
type validIcons = "cart" | "close" | "next" | "back" | "trash" | "menu";
interface IButton extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
    src?: string
    type: btnTypes;
    icon?: validIcons;
}

const Button : FC<IButton>= ({children, className, type, src, icon, ...other}) => {
    const handleType = () => {
        switch(type) {
            case "icon":
                switch(icon) {
                    case "cart":
                        return <button {...other} className={`${s.button} ${s.icon} ${className}`}><img className={icon} src={cart}/></button>
                    case "close":
                        return <button {...other} className={`${s.button} ${s.icon} ${className}`}><img className={icon} src={close}/></button>
                    case "next":
                        return <button {...other} className={`${s.button} ${s.icon} ${className}`}><img className={icon} src={next}/></button>
                    case "back":
                        return <button {...other} className={`${s.button} ${s.icon} ${className}`}><img className={icon} src={back}/></button>
                    case "trash":
                        return <button {...other} className={`${s.button} ${s.icon} ${className}`}><img className={icon} src={trash}/></button>
                    case "menu":
                        return <button {...other} className={`${s.button} ${s.icon} ${className}`}><img className={icon} src={menu}/></button>
                }
            case "picture":
                return <button {...other} className={`${s.button} ${s.picture} ${className}`}><img className="picture" src={src}/></button>
            case "normal":
                return (
                    <div className={className}>
                        <img className={`${icon} ${s.btnImg}`} src={cart} />
                        <button {...other} className={`${s.button} ${s[type]} ${className}`}>{children}</button>
                    </div>
                    )
            default:
                return <button {...other} className={`${s.button} ${s[type]} ${className}`}>{children}</button>

        }    
    }
    
    return (
        <>{handleType()}</>
    )
}

export default Button