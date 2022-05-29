import { theme, Theme } from '@chakra-ui/react';

const customTheme: Theme = {
    ...theme,
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
    },
    colors: {
        ...theme.colors,
        purple: {
            ...theme.colors.purple,
            500: '#510083',
        },
    },
};

export default customTheme;
