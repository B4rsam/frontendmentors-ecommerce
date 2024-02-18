import s from './pictures.module.sass'
import prod1 from '../../assets/products/image-product-1.jpg'
import prod2 from '../../assets/products/image-product-2.jpg'
import prod3 from '../../assets/products/image-product-3.jpg'
import prod4 from '../../assets/products/image-product-4.jpg'
import thumb1 from '../../assets/products/image-product-1-thumbnail.jpg'
import thumb2 from '../../assets/products/image-product-2-thumbnail.jpg'
import thumb3 from '../../assets/products/image-product-3-thumbnail.jpg'
import thumb4 from '../../assets/products/image-product-4-thumbnail.jpg'
import Button from '../Button/Button'
import { useMemo, useState } from 'react'
import PicModal from '../Modal/PicModal/PicModal'

const PictureSection = () => {
    const [currentPic, setPic] = useState(prod1)
    const [modal, setModal] = useState(false)
    const [index, setIndex] = useState(0)
    const picList = [{prod: prod1, thumb: thumb1, id: 0}, {prod: prod2, thumb: thumb2, id: 1}, {prod: prod3, thumb: thumb3, id: 2}, {prod: prod4, thumb: thumb4, id: 3}]
    const pictureList = useMemo(() => picList.map((item, index) => {
        return ( 
            <label className={s.thumbnails} key={index}>
                <input type="radio" name="thumbs" className={s.thumbnails} onChange={() => setPic(item.prod)} defaultChecked={index === 0}/>
                <img src={item.thumb} />
            </label> )
    }), picList)

    const handleModal = () => {
        setModal(!modal)
    } 

    const handleSwitch = (direction : any) => {
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
        <div className={s.picSection}>
            {modal ? <PicModal onExit={handleModal} focusPicture={currentPic} picList={picList}/> : null}
            <Button type="icon" icon="back" className={`${s.switcher} switcher ${s.left}`} onClick={() => handleSwitch('left')}/>
            <Button type="picture" className={s.mainPic} src={currentPic} onClick={handleModal}/>
            <Button type="icon" icon="next" className={`${s.switcher} switcher ${s.right}`} onClick={() => handleSwitch('right')}/> 
            <form className={s.thumbs}>
                {pictureList}
            </form>
        </div>
    )
}

export default PictureSection