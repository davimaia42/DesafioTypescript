import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import { useFetch } from '../hooks/useFetch';

interface Product {
    id: string;
    name: string;
    price: string;
    brand: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

const Home = () => {
    const { data, error } = useFetch<Product[]>('products');

    if (error) {
        alert(error.message);
    }

    return (
        <>
            <Navbar />
            <Box as="main" padding="20">
                <ProductGrid data={data} />
            </Box>
        </>
    );
};

export default Home;
