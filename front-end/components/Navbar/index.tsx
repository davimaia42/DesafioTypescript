import { Center, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
    return (
        <HStack w="100vw" h="6vh" bg="purple.500" paddingLeft="3vw">
            <Center>
                <Text
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize="3xl"
                    lineHeight="3xl"
                    color="#FFFFFF"
                >
                    Products
                </Text>
            </Center>
        </HStack>
    );
};

export default Navbar;
