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
import { useId, useMemo, useState } from 'react'
import PicModal from '../Modal/PicModal/PicModal'

const PictureSection = () => {
    const [currentPic, setPic] = useState(prod1)
    const [modal, setModal] = useState(false)
    const picList = [{prod: prod1, thumb: thumb1}, {prod: prod2, thumb: thumb2}, {prod: prod3, thumb: thumb3}, {prod: prod4, thumb: thumb4}]
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

    return (
        <div className={s.picSection}>
            {modal ? <PicModal onExit={handleModal} focusPicture={currentPic} picList={picList}/> : null}
            <Button type="picture" className={s.mainPic} src={currentPic} onClick={handleModal}/>
            <form className={s.thumbs}>
                {pictureList}
            </form>
        </div>
    )
}

export default PictureSection