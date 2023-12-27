import React from 'react'
import ItemCount from './ItemCount.jsx'
import { Card, CardBody, CardFooter, Text, Stack, Divider, Button } from '@chakra-ui/react'

const ItemDetail = ({item}) => {

    return (
        <Card p='2' maxW='sm' align='center'>
            <CardBody>
                <Stack direction='column'>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Text>${item.price}</Text>
                </Stack>
            </CardBody>
            <CardFooter direction='column'>
                <ItemCount />
            </CardFooter>
        </Card>
    )
}

export default ItemDetail