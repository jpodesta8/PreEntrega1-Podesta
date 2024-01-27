import React from 'react'
import { Center, Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <>
      <Center p='4' w='100%' h='300'>
        <Spinner size='xl'/>
      </Center>
    </>

  )
}

export default Loader