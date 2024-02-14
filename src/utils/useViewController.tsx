import { useState } from "react";

type quantityAction = "add" | "subtract";

const useViewController = () => {
    const [productCount, setCount] = useState(0)
    const [cartCount, setCart] = useState(0)

    const handleQuantity = (action : quantityAction) => {
        switch(action) {
            case "add":
                setCount(productCount + 1)
                break;
            case "subtract":
                if (productCount > 0) {
                    setCount(productCount - 1)
                }
                break;
        }
    }

    const handleAddToCart = () => {
        setCart(productCount)
    }

    return {
        productCount,
        cartCount,
        handleQuantity,
        handleAddToCart
    }
}

export default useViewController