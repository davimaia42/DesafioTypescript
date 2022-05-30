import { VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';

const ProductTile = (props) => {
    return (
        <VStack
            w="12vw"
            h="22vh"
            bg="white"
            border="1px"
            borderRadius="md"
            padding="4"
            align="flex-start"
            spacing="0.5"
            boxShadow="md"
        >
            <Image
                width="13vw"
                height="11.3vh"
                src={props.image}
                alt="product image"
            />
            <Text
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="sm"
                color="black"
            >
                {props.name}
            </Text>
            <Text
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="xs"
                color="black"
            >
                {props.brand}
            </Text>
            <Text
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="bold"
                fontSize="2xl"
                color="black"
            >
                R$ {props.price}
            </Text>
        </VStack>
    );
};

export default ProductTile;
