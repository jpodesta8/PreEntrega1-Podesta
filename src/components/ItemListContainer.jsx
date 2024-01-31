import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList.jsx'
import { useParams } from 'react-router-dom'
import Loader from './Loader.jsx'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () => {

  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchProducts = async () => {

      const db = getFirestore()

      const itemsCollection = collection(db, "products")

      const q =  categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection

      const itemsSnapshot = await getDocs(q)

      const itemsList = []

      setLoading(true)

      setTimeout(() => {

        itemsSnapshot.forEach((i) => {
          const itemData = i.data()

          itemsList.push({ ...itemData, id: i.id})
        })

        setProducts(itemsList)
        setLoading(false)

      }, 3000)
    }

    fetchProducts()
  }, [categoryId])

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <ItemList
        products={products}
      />
    </div>
  )
}

export default ItemListContainer