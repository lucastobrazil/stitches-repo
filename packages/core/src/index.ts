import { styled, css, global } from './stitches.config';

// Basic Component
const Button = styled('button', {
    backgroundColor: '$primary',
    padding: '$large',
    borderRadius: 99999,
    '&:hover': {
        backgroundColor: 'lightgray',
    },
});

// Another Component
const Wrapper = styled('main', {
    backgroundColor: '$background'
});

// Example basic var consumed by icons
const exportedTestVar: number = 22;

export { 
    Button, 
    Wrapper,
    exportedTestVar, 
    // Stitches functions, to be exposed for consumption
    css, 
    global, 
};
