import { FC, HTMLAttributes, ReactNode } from "react"
import cart from '../../assets/icons/icon-cart.svg'
import s from './button.module.sass';

type btnTypes= "primary" | "navbar" | "icon";
interface IButton extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    type: btnTypes;
}

const Button : FC<IButton>= ({children, className, type}) => {
    const handleType = () => {
        switch(type) {
            case "icon":
                return <button className={`${s.button} ${s.icon} ${className}`}><img src={cart}/></button>
            default:
                return <button className={`${s.button} ${s[type]} ${className}`}>{children}</button>
        }    
    }
    
    return (
        <>{handleType()}</>
    )
}

export default Button