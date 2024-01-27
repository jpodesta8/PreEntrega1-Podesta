import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import Loader from './Loader.jsx'
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [item, setItemDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const db = getFirestore()
    const itemDetail = doc(db, "products", `${id}`)


    setLoading(true)

    setTimeout(() => {
      getDoc(itemDetail)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setItemDetail({ ...snapshot.data(), id: snapshot.id})
          }

        })
      setLoading(false)
    }, 2000)

  }, [id])

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer