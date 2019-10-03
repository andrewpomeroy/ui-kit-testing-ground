import { variant } from 'styled-system';

const buttonShape = props => variant({
  prop: 'shape',
  variants: {
    default: {
      borderRadius: '5px'
    },
    rounded: {
      borderRadius: '999px',
    },
    square: {
      borderRadius: 0
    }
  }
})

export default buttonShape;