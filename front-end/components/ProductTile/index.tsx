import { VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';

const ProductTile = () => {
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
                src="https://media.architecturaldigest.com/photos/62154614ce63dd788a528f77/16:9/w_2560%2Cc_limit/GettyImages-1277369090.jpg"
                alt="dan abramov"
            />
            <Text
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="sm"
                color="black"
            >
                Product Name 1
            </Text>
            <Text
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="xs"
                color="black"
            >
                Brand Name 1
            </Text>
            <Text
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="bold"
                fontSize="2xl"
                color="black"
            >
                R$ 765.00
            </Text>
        </VStack>
    );
};

export default ProductTile;
