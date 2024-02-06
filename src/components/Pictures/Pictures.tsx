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
            <Button type="picture" className={s.mainPic} src={prod1}/>
            <div className={s.thumbs}>
                <Button type="picture" className={s.thumbnails} src={thumb1}/>
                <Button type="picture" className={s.thumbnails} src={thumb2}/>
                <Button type="picture" className={s.thumbnails} src={thumb3}/>
                <Button type="picture" className={s.thumbnails} src={thumb4}/>
            </div>
        </div>
    )
}

export default PictureSection