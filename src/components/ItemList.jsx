import React from 'react'
import Item from './Item.jsx'
import { Grid, GridItem } from '@chakra-ui/react'

const ItemList = ({ productos }) => {
    return (
        <Grid templateColumns='repeat(5, 1fr)' templateRows='repeat(5, 1fr)' gap={4}>
            {
                productos.map((p) => {
                    return (
                        <GridItem key={p.id}>
                            <Item
                                product={p}
                            />
                        </GridItem>
                    )
                })
            }
        </Grid>
    )
}

export default ItemList