import React from 'react'
import { Card, CardBody, CardFooter, Text, Stack, Divider, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {

    return (
        <Card p='2' maxW='sm' align='center'>
            <CardBody>
                <Stack bg="blue">
                    {/* imagen */}
                </Stack>
                <Stack direction='column'>
                    <Text>{product.title}</Text>
                    <Text>${product.price}</Text>
                </Stack>
            </CardBody>
            <CardFooter direction='column'>
                <Link to={`/item/${product.id}`}>
                    <Button>Ver Detalle</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default Item