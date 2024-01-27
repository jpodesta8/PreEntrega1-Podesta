import React from 'react'
import ItemCount from './ItemCount.jsx'
import { Card, CardBody, CardFooter, Text, Stack, Center, Image } from '@chakra-ui/react'

const ItemDetail = ({ item }) => {

    return (
        <Center p='10'>
            <Card maxW='700' align='center'>
                <CardBody>
                    <Stack h='350'>
                        <Center>
                            <Image src={`${item.image}`} alt={`${item.title}`} maxH='300' />
                        </Center>
                    </Stack>
                    <Stack direction='column'>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>${item.price}</Text>
                    </Stack>
                </CardBody>
                <CardFooter direction='column'>
                    {<ItemCount item={item} />}
                </CardFooter>
            </Card>
        </Center>

    )
}

export default ItemDetail