import React from 'react';
import Head from 'next/head';
import { Heading } from '@chakra-ui/react';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Products</title>
            </Head>

            <main>
                <Heading size="xl">Welcome</Heading>
            </main>
        </div>
    );
};

export default Home;
