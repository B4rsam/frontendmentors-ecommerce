import { FC, HTMLAttributes } from 'react'
import Button from '../../Button/Button'
import s from './mobilemenu.module.sass'

interface IModal extends HTMLAttributes<HTMLDivElement> {
    onExit : any
}

const MenuModal : FC<IModal>= ({onExit}) => {
    return (
        <div className={s.modalWrapper}>
            <div className={s.contentSection}>
                <Button type="icon" icon="close" className={s.closeBtn} onClick={onExit}/>
                <div className={s.menuButtons}>
                    <Button className={s.menuButton} type="navbar" children="Collections"/>
                    <Button className={s.menuButton} type="navbar" children="Men"/>
                    <Button className={s.menuButton} type="navbar" children="Women"/>
                    <Button className={s.menuButton} type="navbar" children="About"/>
                    <Button className={s.menuButton} type="navbar" children="Contact"/>
                </div>
            </div>
        </div>
    )
}

export default MenuModal