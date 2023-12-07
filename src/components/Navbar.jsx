import React from 'react'
import {
  Flex,
  Spacer,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'

//COMPONENTE CONTENEDOR

const Navbar = () => {
  return (
    <div align='center'>
      <Center fontSize='5xl' p='4' as='i'>
        The Art Gallery
      </Center>

      <Divider orientation='horizontal' />

      <Flex>
        <Center p='2' >
          <Button variant='outline' >Inicio</Button>
        </Center>

        <Spacer />

        <Center>
          <Menu p='2'>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Categorias
            </MenuButton>
            <MenuList>
              <MenuItem>Stickers</MenuItem>
              <MenuItem>Fotografia</MenuItem>
              <MenuItem>Escultura</MenuItem>
              <MenuItem>Dibujo</MenuItem>
            </MenuList>
          </Menu>
        </Center>

        <Spacer />

        <CartWidget />

      </Flex>
      <Divider orientation='horizontal' />
    </div>
  )
}

export default Navbar