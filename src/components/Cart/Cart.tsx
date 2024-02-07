import s from './cart.module.sass'
import Button from '../Button/Button'
import plus from '../../assets/icons/icon-plus.svg'
import minus from '../../assets/icons/icon-minus.svg'

const CartSection = () => {
    return (
        <div className={s.cartBody}>
            <div className={s.quantitySection}>
                <Button type="picture" className={`${s.countBtn} ${s.minus}`} src={minus}/>
                <div id="quantity" className={s.countNum}>0</div>
                <Button type="picture" className={`${s.countBtn} ${s.plus}`} src={plus}/>
            </div>
            <Button type="normal" children={`Add to Cart`} className={s.cartBtn}/>
        </div>
    )
}

export default CartSection