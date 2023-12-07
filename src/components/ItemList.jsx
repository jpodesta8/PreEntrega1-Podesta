import React from 'react'
import Item from './Item'
import { HStack, Stack } from '@chakra-ui/react'

const ItemList = ({ productos }) => {
    return (
        <HStack spacing='24px' p='4'>
            {
                productos.map(props => {
                    return (
                        <Stack key={props.nombre}>
                            <Item
                                nombre={props.nombre}
                                descripcion={props.descripcion}
                                precio={props.precio}
                            />
                        </Stack>
                    )
                            
                })
            }
        </HStack>
    )
}

export default ItemList