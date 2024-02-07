import Button from '../../Button/Button'
import s from './cartmodal.module.sass'

const CartModal = () => {
    return (
        <div className={s.modalBody}>
            <p>Cart</p>
            {/*stuff*/}
            <Button type="primary" children="Checkout" className={s.checkout}/>
        </div>
    )
}

export default CartModal