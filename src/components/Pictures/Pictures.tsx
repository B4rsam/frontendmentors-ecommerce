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
import { useState } from 'react'
import PicModal from '../Modal/PicModal/PicModal'

const PictureSection = () => {
    const [currentPic, setPic] = useState(prod1)
    const [modal, setModal] = useState(false)
    const [picList, setList] = useState([])

    const handleModal = () => {
        setModal(!modal)
    } 

    return (
        <div className={s.picSection}>
            {modal ? <PicModal onExit={handleModal} focusPicture={currentPic}/> : null}
            <Button type="picture" className={s.mainPic} src={currentPic} onClick={handleModal}/>
            <form className={s.thumbs}>
                <label className={s.thumbnails}>
                    <input type="radio" name="thumbs" className={s.thumbnails} onChange={() => setPic(prod1)}/>
                    <img src={thumb1} />
                </label>
                <label className={s.thumbnails}>
                    <input type="radio" name="thumbs" className={s.thumbnails} onChange={() => setPic(prod2)}/>
                    <img src={thumb2} />
                </label>
                <label className={s.thumbnails}>
                <input type="radio" name="thumbs" className={s.thumbnails} onChange={() => setPic(prod3)}/>
                    <img src={thumb3} />
                </label>
                <label className={s.thumbnails}>
                    <input type="radio" name="thumbs" className={s.thumbnails} onChange={() => setPic(prod4)}/>
                    <img src={thumb4} />
                </label>
            </form>
        </div>
    )
}

export default PictureSection