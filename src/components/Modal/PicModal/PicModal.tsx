import { FC, HTMLAttributes, useState } from 'react'
import s from './picmodal.module.sass'
import Button from '../../Button/Button'
import thumb1 from '../../../assets/products/image-product-1-thumbnail.jpg'
import thumb2 from '../../../assets/products/image-product-2-thumbnail.jpg'
import thumb3 from '../../../assets/products/image-product-3-thumbnail.jpg'
import thumb4 from '../../../assets/products/image-product-4-thumbnail.jpg'

interface IPicModal extends HTMLAttributes<HTMLDivElement> {
    focusPicture: any
    onExit: () => void
}

const PicModal : FC<IPicModal>= ({focusPicture, onExit}) => {
    const [focusPic, setPic] = useState(focusPicture)

    return (
        <div className={s.modalWrapper}>
            <div className={s.modalBody}>
                <Button type="icon" icon="close" className={s.closeBtn} onClick={onExit}/>
                <img src={focusPic} className={s.focusPicture}/>
                <Button type="icon" icon="back" className={`${s.switcher} switcher ${s.left}`}/>
                <Button type="icon" icon="next" className={`${s.switcher} switcher ${s.right}`}/>
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