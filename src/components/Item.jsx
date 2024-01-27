import React from 'react'
import { Card, CardBody, CardFooter, Text, Stack, Button, Image, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {

    return (
        <Card p='2' maxW='sm' minH='400' align='center'>
            <CardBody>
                <Stack h='250' p='2'>
                    <Center>
                        <Image src={`${product.image}`} alt={`${product.title}`} maxH='200' />
                    </Center>
                </Stack>
                <Stack direction='column' h='100'>
                    <Text h='50%'>{product.title}</Text>
                    <Text h='50%'>${product.price}</Text>
                </Stack>
            </CardBody>
            <CardFooter direction='column'>
                <Link to={`/item/${product.id}`}>
                    <Button colorScheme='teal' size='md'>Ver Detalle</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default Item