const Stitches = require('@stitches/react');

const { styled, css, theme } = Stitches.createCss({
    theme: {
      colors: {
          primary: '#cc0000',
        gray400: 'gainsboro',
        gray500: 'lightgray',
      },
      fontSizes: {
          large: '18px'
      }
    },
    media: {
      bp1: '(min-width: 480px)',
    },
    utils: {
      marginX: (config) => (value) => ({ marginLeft: value, marginRight: value }),
    },
  });

  module.exports = {styled, css, theme }