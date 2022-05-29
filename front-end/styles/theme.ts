import { theme, Theme } from '@chakra-ui/react';

const customTheme: Theme = {
    ...theme,
    styles: {
        global: (props) => ({
            body: {
                bg: '#F5F5F5',
            },
        }),
    },
    fonts: {
        body: 'Inter, sans-serif',
        heading: 'Inter, sans-serif',
        mono: 'Inter, sans-serif',
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: 400,
        medium: 600,
        bold: 700,
    },
    radii: {
        ...theme.radii,
        sm: '5px',
        md: '10px',
    },
    fontSizes: {
        ...theme.fontSizes,
        sm: '15px',
        xs: '14px',
    },
    colors: {
        ...theme.colors,
        purple: {
            ...theme.colors.purple,
            500: '#510083',
        },
    },
    shadows: {
        ...theme.shadows,
        sm: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        md: '0px 4px 20px rgba(0, 0, 0, 0.25)',
    },
    borders: {
        ...theme.borders,
        '1px': '1px solid black',
    },
};

export default customTheme;
