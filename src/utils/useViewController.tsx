import { useEffect, useMemo, useState } from "react";
import prod1 from '../../assets/products/image-product-1.jpg'
import prod2 from '../../assets/products/image-product-2.jpg'
import prod3 from '../../assets/products/image-product-3.jpg'
import prod4 from '../../assets/products/image-product-4.jpg'
import thumb1 from '../../assets/products/image-product-1-thumbnail.jpg'
import thumb2 from '../../assets/products/image-product-2-thumbnail.jpg'
import thumb3 from '../../assets/products/image-product-3-thumbnail.jpg'
import thumb4 from '../../assets/products/image-product-4-thumbnail.jpg'

const useViewController = () => {
    const [picList, setList] = useState([])
    const [thumbList, setThumbs] = useState([])
    const pictureList = useMemo(() => {}, [prod1,prod2,prod3,prod4])
    const thumbnailList = useMemo(() => {}, [thumb1,thumb2,thumb3,thumb4])
    

    useEffect(() => {
        setList([prod1, prod2, prod3, prod4])
        setThumbs([thumb1, thumb2, thumb3, thumb4])
    })
    return {
        picList,
        thumbList,
    }
}

export default useViewController