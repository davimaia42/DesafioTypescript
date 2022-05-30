import { Grid, GridItem } from '@chakra-ui/react';
import ProductTile from '../ProductTile';
import React from 'react';

const ProductGrid = (props) => {
    return (
        <Grid templateColumns="repeat(5, 1fr)" rowGap={8} columnGap={36}>
            {props.data?.map((product) => (
                <GridItem key={product.id}>
                    <ProductTile
                        name={product.name}
                        brand={product.brand}
                        price={product.price}
                        image={product.image}
                    />
                </GridItem>
            ))}
        </Grid>
    );
};

export default ProductGrid;
