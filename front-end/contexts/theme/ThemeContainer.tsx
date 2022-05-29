import React from 'react';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import theme from '../../styles/theme';

const ThemeContainer = ({ children }) => {
    return (
        <ChakraProvider theme={theme}>
            <EmotionThemeProvider theme={theme}>
                <CSSReset />
                {children}
            </EmotionThemeProvider>
        </ChakraProvider>
    );
};

export default ThemeContainer;
