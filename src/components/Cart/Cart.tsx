import s from './cart.module.sass'
import Button from '../Button/Button'
import plus from '../../assets/icons/icon-plus.svg'
import minus from '../../assets/icons/icon-minus.svg'
import { useState } from 'react';

type quantityAction = "add" | "subtract";

const CartSection = () => {
    const [productCount, setCount] = useState(0)

    const handleQuantity = (action : quantityAction) => {
        switch(action) {
            case "add":
                setCount(productCount + 1)
                break;
            case "subtract":
                console.log(productCount)
                if (productCount > 0) {
                    setCount(productCount - 1)
                }
                break;
        }
    }

    return (
        <div className={s.cartBody}>
            <div className={s.quantitySection}>
                <Button type="picture" className={`${s.countBtn} ${s.minus}`} src={minus} onClick={() => handleQuantity('subtract')}/>
                <div id="quantity" className={s.countNum}>{productCount}</div>
                <Button type="picture" className={`${s.countBtn} ${s.plus}`} src={plus} onClick={() => handleQuantity('add')}/>
            </div>
            <Button type="normal" children={`Add to Cart`} className={s.cartBtn}/>
        </div>
    )
}

export default CartSection