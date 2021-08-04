import { createCss } from '@stitches/react';

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  prefix: 'maki',
  theme: {
    colors: {
      primary: 'yellow',
      background: '#fafafa',
    },
    space: {
        large: '30px'
    }
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    // Example util that we could set
    marginX: (config) => (value) => ({ marginLeft: value, marginRight: value }),
  },
});