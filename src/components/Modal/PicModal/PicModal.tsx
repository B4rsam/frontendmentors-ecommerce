import { FC, HTMLAttributes, useState } from 'react'
import s from './picmodal.module.sass'
import Button from '../../Button/Button'

interface IPicModal extends HTMLAttributes<HTMLDivElement> {
    focusPicture: any
}

const PicModal : FC<IPicModal>= ({focusPicture}) => {
    const [focusPic, setPic] = useState(focusPicture)
    return (
        <div className={s.modalWrapper}>
            <div className={s.modalBody}>
                <Button type="primary" children="s" className={s.closeBtn}/>
                <img src={focusPic} className={s.focusPicture}/>
                <Button type="primary" children="l" className={`${s.switcher} switcher ${s.left}`}/>
                <Button type="primary" children="r" className={`${s.switcher} switcher ${s.right}`}/>
                <div className={s.thumbSection}>

                </div>
            </div>
        </div>
    )
}

export default PicModal