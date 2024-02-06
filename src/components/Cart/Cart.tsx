import s from './cart.module.sass'
import Button from '../Button/Button'
import cart from '../../assets/icons/icon-cart.svg'
import plus from '../../assets/icons/icon-plus.svg'
import minus from '../../assets/icons/icon-minus.svg'

const CartSection = () => {
    return (
        <div className={s.cartBody}>
            <div className={s.quantitySection}>
                <Button type="picture" className={s.countBtn} src={minus}/>
                <div id="quantity">0</div>
                <Button type="picture" className={s.countBtn} src={plus}/>
            </div>
            <Button type="primary" children={`Add to Cart`} className={s.cartBtn}/>
        </div>
    )
}

export default CartSection