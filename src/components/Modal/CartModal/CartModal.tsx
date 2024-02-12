import Button from '../../Button/Button'
import s from './cartmodal.module.sass'

const CartModal = () => {
    return (
        <div className={s.modalBody}>
            <p className={s.cartTitle}>Cart</p>
            <div className={s.modalContent}>
                {/*stuff*/}
            </div>
            <Button type="primary" children="Checkout" className={s.checkout}/>
        </div>
    )
}

export default CartModal