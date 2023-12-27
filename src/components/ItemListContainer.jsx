import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList.jsx'
import { getProducts } from '../apis/fake-store.js'
import { useParams } from 'react-router-dom'

// COMPONENTE CONTENEDOR

const ItemListContainer = () => {

  const { categoryId } = useParams()
  const [productos, setProducts] = useState([])


  useEffect(() => {
    getProducts().then((products) => {
      console.log(categoryId)
      if (categoryId) {
        setProducts(products.filter((p) => p.category === categoryId))
        console.log(categoryId)
      } else {
        setProducts(products)
      }
    })
  }, [categoryId])

  return (
    <div>

      <ItemList
        productos={productos}
      />
    </div>
  )
}

export default ItemListContainer