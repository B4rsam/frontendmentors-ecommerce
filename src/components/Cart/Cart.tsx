import s from './cart.module.sass'
import Button from '../Button/Button'
import plus from '../../assets/icons/icon-plus.svg'
import minus from '../../assets/icons/icon-minus.svg'
import { FC, HTMLAttributes, ReactNode, useState } from 'react';
interface ICart extends HTMLAttributes<HTMLDivElement> {
    count : number;
    handleQuantity : any
    handleAddToCart : () => void;
}

const CartSection : FC<ICart>= ({count, handleQuantity, handleAddToCart}) => {


    return (
        <div className={s.cartBody}>
            <div className={s.quantitySection}>
                <Button type="picture" className={`${s.countBtn} ${s.minus}`} src={minus} onClick={() => handleQuantity('subtract')}/>
                <div id="quantity" className={s.countNum}>{count}</div>
                <Button type="picture" className={`${s.countBtn} ${s.plus}`} src={plus} onClick={() => handleQuantity('add')}/>
            </div>
            <Button type="normal" children={`Add to Cart`} className={s.cartBtn} onClick={() => handleAddToCart()}/>
        </div>
    )
}

export default CartSection