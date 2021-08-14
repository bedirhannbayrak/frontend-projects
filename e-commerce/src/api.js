import axios from "axios"

const BASE_URL = "https://fakestoreapi.com"

export const fetchProducts = async ()=> {
    const {data} = await axios.get(`${BASE_URL}/products`)
    return data
}

export const fetchProduct = async (id)=> {
    const {data} = await axios.get(`${BASE_URL}/products/${id}`)
    return data
}

export const fetchAllCategories= async ()=> {
    const {data} = await axios.get(`${BASE_URL}/products/categories`)
    return data
}

export const fetchProductsByCategory= async (name)=> {
    const {data} = await axios.get(`${BASE_URL}/products/category/${name}`)
    return data
}



