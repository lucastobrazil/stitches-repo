const Stitches = require('./stitches.config');

const Button = Stitches.styled('button', {
  backgroundColor: '$primary',
  borderRadius: '9999px',
  fontSize: '$large',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

module.exports = Button;