import React from 'react'
import {
  IconButton, Stack, Center, Circle
} from '@chakra-ui/react'
import { HiOutlineShoppingCart } from "react-icons/hi"
import { Link } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'

//COMPONENTE DE PRESENTACION

const CartWidget = () => {

  const { cantidadEnCarrito } = useContext (CartContext)

  return (
    <div>
      <Stack direction='row' p='2'>
        <Center fontWeight='bold' fontSize='xs'>
          <Circle as='span' color="white" bg='red' w='18px' h='18px'>  {cantidadEnCarrito()}  </Circle>
        </Center>
        <Link to='/cart'>
          <IconButton
            aria-label='CartWidget'
            icon={<HiOutlineShoppingCart />}
            size='md'
            fontSize='20px'
          />
        </Link>

      </Stack>
    </div>
  )
}

export default CartWidget