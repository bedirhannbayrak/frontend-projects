import { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) => {

    const initialState = JSON.parse(localStorage.getItem("favorites")) || []

    const [items,setItems] = useState(initialState)

    useEffect(()=> {
        localStorage.setItem("favorites",JSON.stringify(items))
    },[items])

    const addToFavorites = (item,favoritesItem) => {
        const isfavoritesItem= favoritesItem || items.find( i => i.id === item.id )
        if(isfavoritesItem){
            return setItems((prev)=> ([...prev].filter((i) => i.id!==isfavoritesItem.id)))
        }
        setItems((prev) => ([...prev,item]))
    }

    const removeFromFavorites = (id) => {
        setItems((prev) => [...prev].filter(item => item.id!==id))
    };

    const values = {
        items,
        setItems,
        addToFavorites,
        removeFromFavorites,
    }

    return (
        <FavoritesContext.Provider value={values}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => useContext(FavoritesContext)

