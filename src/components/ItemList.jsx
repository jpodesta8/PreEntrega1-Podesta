import React from 'react'
import Item from './Item.jsx'
import { Grid, GridItem } from '@chakra-ui/react'

const ItemList = ({ products }) => {

    return (
        <Grid templateColumns='repeat(5, 2fr)' templateRows='repeat(5, 1fr)' gap={4} p='4'>
            {
                products.map((p) => {
                    return (
                        <GridItem key={p.id}>
                            <Item
                                product={p}
                                key={p.id}
                            />
                        </GridItem>
                    )
                })
            }
        </Grid>
    )
}

export default React.memo(ItemList)