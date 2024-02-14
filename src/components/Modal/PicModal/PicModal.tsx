import { FC, HTMLAttributes, useId, useState } from 'react'
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
    focusPicture: any;
    onExit: () => void;
    picList: Array<{prod: any, thumb: any, id: number}>;
}

const PicModal : FC<IPicModal>= ({focusPicture, onExit, picList}) => {
    const [focusPic, setPic] = useState(focusPicture)
    const [index, setIndex] = useState(0)

    const listMapper = () => {
        return (picList.map((item) => <img src={item.thumb} className={`${s.thumbs} ${index === item.id ? s.focused : null}`} key={item.id} />))
    }

    const handleSwitch = (direction : direction) => {
        switch(direction) {
            case 'left':
                if(index-1 < 0) {
                    setIndex(picList.length-1)
                    setPic(picList[picList.length-1].prod)
                }
                else {
                    setIndex(index-1)
                    setPic(picList[index-1].prod)    
                }
                break;
            case 'right':
                if(index+1 > picList.length-1) {
                    setIndex(0)
                    setPic(picList[0].prod)
                }
                else {
                    setIndex(index+1)
                    setPic(picList[index+1].prod)    
                }
                break;
        }
    }

    return (
        <div className={s.modalWrapper} >
            <div className={s.modalBody} >
                <Button type="icon" icon="close" className={s.closeBtn} onClick={onExit}/>
                <div className={s.focusHolder}>
                    <img src={focusPic} className={s.focusPicture}/>
                    <Button type="icon" icon="back" className={`${s.switcher} switcher ${s.left}`} onClick={() => handleSwitch('left')}/>
                    <Button type="icon" icon="next" className={`${s.switcher} switcher ${s.right}`} onClick={() => handleSwitch('right')}/>    
                </div>
                <div className={s.thumbSection}>
                    {listMapper()}
                </div>
            </div>
        </div>
    )
}

export default PicModal