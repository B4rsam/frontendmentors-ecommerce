import { FC, HTMLAttributes, useState } from 'react'
import s from './picmodal.module.sass'
import Button from '../../Button/Button'
import thumb1 from '../../../assets/products/image-product-1-thumbnail.jpg'
import thumb2 from '../../../assets/products/image-product-2-thumbnail.jpg'
import thumb3 from '../../../assets/products/image-product-3-thumbnail.jpg'
import thumb4 from '../../../assets/products/image-product-4-thumbnail.jpg'
import prod1 from '../../../assets/products/image-product-1.jpg'
import prod2 from '../../../assets/products/image-product-2.jpg'
import prod3 from '../../../assets/products/image-product-3.jpg'
import prod4 from '../../../assets/products/image-product-4.jpg'

type direction = 'left' | 'right';
interface IPicModal extends HTMLAttributes<HTMLDivElement> {
    focusPicture: any
    onExit: () => void
}

const PicModal : FC<IPicModal>= ({focusPicture, onExit}) => {
    const [focusPic, setPic] = useState(focusPicture)
    const picList = [prod1, prod2, prod3, prod4]
    let i : number = 0;

    const handleSwitch = (direction : direction) => {
        switch(direction) {
            case 'left':
                i--;
                if (i < 0) {
                    i = 3;
                }
                console.log(i)
                setPic(picList[i])
                break;
            case 'right':
                i++;
                console.log(i)
                if (i > 3) {
                    i = 0;
                }
                setPic(picList[i])
                break;
        }
    }

    return (
        <div className={s.modalWrapper} >
            <div className={s.modalBody} >
                <Button type="icon" icon="close" className={s.closeBtn} onClick={onExit}/>
                <img src={focusPic} className={s.focusPicture}/>
                <Button type="icon" icon="back" className={`${s.switcher} switcher ${s.left}`} onClick={() => handleSwitch('left')}/>
                <Button type="icon" icon="next" className={`${s.switcher} switcher ${s.right}`} onClick={() => handleSwitch('right')}/>
                <div className={s.thumbSection}>
                    <img src={thumb1} className={s.thumbs}/>
                    <img src={thumb2} className={s.thumbs}/>
                    <img src={thumb3} className={s.thumbs}/>
                    <img src={thumb4} className={s.thumbs}/>
                </div>
            </div>
        </div>
    )
}

export default PicModal