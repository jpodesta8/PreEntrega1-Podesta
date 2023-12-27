import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import {getProductById} from '../apis/fake-store.js'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [item, setItemDetail] = useState(null)

  useEffect (() => {
    getProductById(id).then((product) => {
      setItemDetail(product)
    })
  }, [id])

  return (
    <div>
      {item && <ItemDetail item = {item} />}
    </div>
  )
}

export default ItemDetailContainer