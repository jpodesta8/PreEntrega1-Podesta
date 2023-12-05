import React from 'react'
import {
  Flex,
  Spacer,
  Box,
  Center,
  Circle,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider
} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div>
      <Center fontSize='5xl' p='4' as='i'>
        The Art Gallery
      </Center>

      <Divider orientation='horizontal' colorScheme='blackAlpha'/>

      <Flex>
        <Center p='2' >
          Inicio
        </Center>

        <Spacer />

        <Menu p='2'>
          <MenuButton>Categorias</MenuButton>
          <MenuList>
            <MenuItem>Stickers</MenuItem>
            <MenuItem>Fotografia</MenuItem>
            <MenuItem>Escultura</MenuItem>
            <MenuItem>Dibujo</MenuItem>
          </MenuList>
        </Menu>

        <Spacer />

        <Flex p='2'>
          <Center p='2' fontWeight='bold' fontSize='xs'>
            <Circle as='span' color="white" bg='red' w='18px' h='18px'>  4  </Circle>
          </Center>
          <Box>
            <CartWidget />
          </Box>
        </Flex>
      </Flex>
      <Divider orientation='horizontal' />
    </div>
  )
}

export default Navbar