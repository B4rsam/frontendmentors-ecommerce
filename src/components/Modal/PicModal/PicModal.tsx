import { FC, HTMLAttributes, useState } from 'react'
import s from './picmodal.module.sass'
import Button from '../../Button/Button'

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

                </div>
            </div>
        </div>
    )
}

export default PicModal