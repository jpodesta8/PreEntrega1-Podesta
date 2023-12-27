export const getProducts = async () => {

    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
}

export const getCategories = async () => {

    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = await response.json()
    return data
}

export const getProductById = async (id) => {

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return data
}
