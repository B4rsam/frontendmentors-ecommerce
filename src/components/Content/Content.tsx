import { HTMLAttributes, FC, ReactNode } from 'react'
import CartSection from '../Cart/Cart'
import PriceSection from '../Price/Price'
import s from './content.module.sass'

interface IContent extends HTMLAttributes<HTMLDivElement> {
    count: number;
    handleQuantity: any;
    handleAddToCart: any;
}

const ContentSection : FC<IContent>= ({count, handleQuantity, handleAddToCart}) => {
    return (
        <div className={s.contentSection}>
            <h4 className={s.brandText}>SNEAKER COMPANY</h4>
            <h1 className={s.label}>Fall Limited Edition Sneakers</h1>
            <p className={s.desc}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <PriceSection onOffer={true}/>
            <CartSection count={count} handleQuantity={handleQuantity} handleAddToCart={handleAddToCart}/>
        </div>
    )
}

export default ContentSection