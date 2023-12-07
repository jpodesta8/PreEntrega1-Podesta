import React from 'react'
import { useState } from 'react'
import { Button, Stack, Text, VStack } from '@chakra-ui/react'

// COMPONENTE DE PRESENTACION 

const ItemCount = () => {

  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  return (
    <VStack>
      <Stack direction='row'>
        <Button onClick={sumar} colorScheme='teal' size='sm' >
          +
        </Button>
        <Text as='b' w='50px' align='center' border=''>
          {contador}
        </Text>
        <Button onClick={restar} colorScheme='teal' size='sm'>
          -
        </Button>
      </Stack>
      <Stack>
        <Button>
          Agregar al carrito
        </Button>
      </Stack>
    </VStack>
  )
}

export default ItemCount