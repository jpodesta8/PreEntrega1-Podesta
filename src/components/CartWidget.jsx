import React from 'react'
import {
  IconButton, Stack, Center, Circle
} from '@chakra-ui/react'
import { HiOutlineShoppingCart } from "react-icons/hi"
import { Link } from 'react-router-dom'

//COMPONENTE DE PRESENTACION

const CartWidget = () => {
  return (
    <div>
      <Stack direction='row' p='2'>
        <Center fontWeight='bold' fontSize='xs'>
          <Circle as='span' color="white" bg='red' w='18px' h='18px'>  4  </Circle>
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