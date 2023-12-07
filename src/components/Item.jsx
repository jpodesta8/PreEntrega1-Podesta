import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardBody, CardFooter, Text, Stack, Divider } from '@chakra-ui/react'

const Item = ({ nombre, descripcion, precio }) => {

    return (
            <Card p='2' maxW='xs' align='center'>
                <CardBody>
                    <Stack direction='column'>
                        <Text>{nombre}</Text>
                        <Text>{descripcion}</Text>
                        <Text>{precio}</Text>
                    </Stack>
                </CardBody>
                <CardFooter direction='column'>
                    <ItemCount />
                </CardFooter>
            </Card>
    )
}

export default Item