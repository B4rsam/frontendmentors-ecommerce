import { FC, HTMLAttributes } from 'react'
import Button from '../../Button/Button'
import s from './cartmodal.module.sass'
import thumb1 from '../../../assets/products/image-product-1-thumbnail.jpg'

interface ICartModal extends HTMLAttributes<HTMLDivElement> {
    count: number;
}

const CartModal : FC<ICartModal> = ({count}) => {
    const handleContent = () => {
        if (count === 0) {
            return <p className={s.errorMsg}>Your cart is empty!</p>
        }
        else {
            return (
                <div className={s.cartItem}>
                    <img src={thumb1} className={s.img}/>
                    <div className={s.cartItemText}>
                        <p>Fall Limited Edition Sneakers</p>
                        <p>$125.00 x {count} ${125*count}.00</p>
                    </div>
                </div>
            )    
        }
        
    }

    return (
        <div className={s.modalBody}>
            <p className={s.cartTitle}>Cart</p>
            <div className={s.modalContent}>
                {handleContent()}
            </div>
            <Button type="primary" children="Checkout" className={s.checkout}/>
        </div>
    )
}

export default CartModal