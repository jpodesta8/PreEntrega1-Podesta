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
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CartWidget from './CartWidget.jsx'
import { getCategories } from '../apis/fake-store.js'

//COMPONENTE CONTENEDOR

const Navbar = () => {

  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    }
    fetchCategories();
  }, [])

  return (
    <div align='center'>
      <Link to='/'>
        <Center fontSize='5xl' p='4' as='i'>
          The Art Gallery
        </Center>
      </Link>


      <Divider orientation='horizontal' />

      <Flex>
        <Center p='2' >
          <Link to="/">
            <Button variant='outline' >Inicio</Button>
          </Link>
        </Center>

        <Spacer />

        <Center>
          <Menu p='2'>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Categorias
            </MenuButton>
            <MenuList>
              {
                categories && categories.map((category) => {
                  return(
                    <Link to={`category/${category}`} key={category}><MenuItem>{category}</MenuItem></Link>
                  )
                })
              }
              
              
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