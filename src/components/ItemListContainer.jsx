import React from 'react'
import ItemList from './ItemList'
import { HStack, VStack } from '@chakra-ui/react'

// COMPONENTE CONTENEDOR

const ItemListContainer = () => {

  const productos = [
    { nombre: "Producto1", descripcion: "descripcion producto 1", precio: "3000" },
    { nombre: "Producto2", descripcion: "descripcion producto 2", precio: "1000" },
    { nombre: "Producto3", descripcion: "descripcion producto 3", precio: "50000" }
  ]

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject("No se obtuvieron productos")
    }
  })

  mostrarProductos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <div>
        <ItemList
          productos={productos}
        />
    </div>
  )
}

export default ItemListContainer