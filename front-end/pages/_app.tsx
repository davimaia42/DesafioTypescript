import React from 'react';
import ThemeContainer from '../contexts/theme/ThemeContainer';

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeContainer>
            <Component {...pageProps} />
        </ThemeContainer>
    );
};

export default MyApp;
