import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList.jsx'
import { useParams } from 'react-router-dom'
import Loader from './Loader.jsx'
import { collection, getDocs, getFirestore, query } from "firebase/firestore"

const ItemListContainer = () => {

  const { categoryId } = useParams()
  const [productos, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()

    const itemsCollection = collection(db, "products")

    const q = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection

    setLoading(true)

    setTimeout(() => {
      getDocs(q)
        .then((snapshot) => {

          setProducts(
            snapshot.docs.map((doc) => {
              return {...doc.data(), id: doc.id}
            })
          )
        })
      setLoading(false)
    }, 3000)

  }, [categoryId])

  if (loading) {
    return <Loader />
  }

  return (
    <div>

      <ItemList
        productos={productos}
      />
    </div>
  )
}

export default ItemListContainer