import { styled, css, global } from './stitches.config';

const Button = styled('button', {
    backgroundColor: '$primary',
    padding: '$large',
    borderRadius: 9999,
    '&:hover': {
        backgroundColor: 'lightgray',
    },
});

const Wrapper = styled('main', {
    backgroundColor: '$background'
});

const meaningOfLife = 22;

export { Button, meaningOfLife, css, global, Wrapper }
