import { createCss } from '@stitches/react';

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    colors: {
        primary: '#cc0000',
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
    space: {
        large: '30px'
    }
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (config) => (value) => ({ marginLeft: value, marginRight: value }),
  },
});