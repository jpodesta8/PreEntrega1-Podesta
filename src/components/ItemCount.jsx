import React from 'react'
import { useContext, useState } from 'react'
import { Button, Center, Stack, Text, VStack, Alert, AlertIcon } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'

// COMPONENTE DE PRESENTACION 

const ItemCount = ({ item }) => {

  const [contador, setContador] = useState(1)

  const { agregarProducto } = useContext(CartContext)

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1)
    }
  }

  return (
    <Center>
      <VStack>
        <Stack direction='row'>
          <Button onClick={sumar} colorScheme='gray' size='sm' >
            +
          </Button>
          <Text as='b' w='50px' align='center'>
            {contador}
          </Text>
          <Button onClick={restar} colorScheme='gray' size='sm'>
            -
          </Button>
        </Stack>
        <Stack>
          <Button onClick={() => agregarProducto(item, contador, setContador)} colorScheme='teal' size='md'>
            Agregar al carrito
          </Button>
        </Stack>
      </VStack>
    </Center>

  )
}

export default ItemCount