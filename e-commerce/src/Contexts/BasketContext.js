import { createContext, useContext, useEffect, useState } from 'react';

const BasketContext = createContext()

export const BasketProvider = ({children}) => {

    const initialState = JSON.parse(localStorage.getItem("basket")) || []

    const [items,setItems] = useState(initialState)

    useEffect(()=> {
        localStorage.setItem("basket",JSON.stringify(items))
    },[items])

    const addToBasket = (item,basketItem) => {
        const isBasketItem= basketItem || items.find( i => i.id === item.id )
        if(isBasketItem){
            return setItems((prev)=> ([...prev].filter((i) => i.id!==isBasketItem.id)))
        }
        setItems((prev) => ([...prev,item]))
    }

    const removeFromBasket = (id) => {
        setItems((prev) => [...prev].filter(item => item.id!==id))
    };

    const values = {
        items,
        setItems,
        addToBasket,
        removeFromBasket,
    }

    return (
        <BasketContext.Provider value={values}>
            {children}
        </BasketContext.Provider>
    )
}

export const useBasket = () => useContext(BasketContext)

