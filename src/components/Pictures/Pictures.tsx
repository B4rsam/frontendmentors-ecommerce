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
import { ReactNode, useState } from 'react'

const PictureSection = () => {
    const [currentPic, setPic] = useState(prod1)

    const handlePicChange = (input : any) => {
        setPic(input)
    }

    return (
        <div className={s.picSection}>
            <Button type="picture" className={s.mainPic} src={currentPic}/>
            <div className={s.thumbs}>
                <Button type="picture" className={s.thumbnails} src={thumb1} onClick={() => handlePicChange(prod1)}/>
                <Button type="picture" className={s.thumbnails} src={thumb2} onClick={() => handlePicChange(prod2)}/>
                <Button type="picture" className={s.thumbnails} src={thumb3} onClick={() => handlePicChange(prod3)}/>
                <Button type="picture" className={s.thumbnails} src={thumb4} onClick={() => handlePicChange(prod4)}/>
            </div>
        </div>
    )
}

export default PictureSection