import { FC, HTMLAttributes, ReactNode } from "react"
import s from './button.module.sass';

type btnTypes= "primary" | "navbar" | "icon";
interface IButton extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    type: btnTypes;
}

const Button : FC<IButton>= ({children, className, type}) => {
    return (
        <button className={`${s.button} ${s[type]} ${className}`}>{children}</button>
    )
}

export default Button