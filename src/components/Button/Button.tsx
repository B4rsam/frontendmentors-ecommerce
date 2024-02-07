import { FC, HTMLAttributes, ReactNode } from "react"
import cart from '../../assets/icons/icon-cart.svg'
import s from './button.module.sass';

type btnTypes= "primary" | "navbar" | "icon" | "picture" | "normal";
interface IButton extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
    src?: string
    type: btnTypes;
}

const Button : FC<IButton>= ({children, className, type, src}) => {
    const handleType = () => {
        switch(type) {
            case "icon":
                return <button className={`${s.button} ${s.icon} ${className}`}><img src={cart}/></button>
            case "picture":
                return <button className={`${s.button} ${s.picture} ${className}`}><img src={src}/></button>
            case "normal":
                return (
                    <div className={className}>
                        <img src={cart} className={s.btnImg}/>
                        <button className={`${s.button} ${s[type]} ${className}`}>{children}</button>
                    </div>
                    )
            default:
                return <button className={`${s.button} ${s[type]} ${className}`}>{children}</button>

        }    
    }
    
    return (
        <>{handleType()}</>
    )
}

export default Button