import { FC, HTMLAttributes } from 'react'
import s from './price.module.sass'

interface IPrice extends HTMLAttributes<HTMLDivElement> {
    onOffer: boolean
}

const PriceSection : FC<IPrice> = ({onOffer}) => {
    return (
        <div className={s.priceContent}>
            <div className={s.realPrice}>
                <h2 className={s.price}>$125.00</h2>
                {onOffer ? <h2 className={s.discount}>50%</h2> : null}
            </div>
            {onOffer ? <p className={s.fullPrice}><del>$250.00</del></p> : null}
        </div>
    )
}

export default PriceSection