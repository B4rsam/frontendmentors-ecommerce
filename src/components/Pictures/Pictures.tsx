import s from './pictures.module.sass'
import prod1 from '../../assets/products/image-product-1.jpg'
import thumb1 from '../../assets/products/image-product-1-thumbnail.jpg'
import thumb2 from '../../assets/products/image-product-2-thumbnail.jpg'
import thumb3 from '../../assets/products/image-product-3-thumbnail.jpg'
import thumb4 from '../../assets/products/image-product-4-thumbnail.jpg'
import Button from '../Button/Button'

const PictureSection = () => {
    return (
        <div className={s.picSection}>
            <img className={s.mainPic} src={prod1}/>
            <div className={s.thumbs}>
                <img src={thumb1}/>
                <img src={thumb2}/>
                <img src={thumb3}/>
                <img src={thumb4}/>
            </div>
        </div>
    )
}

export default PictureSection