import { variant } from 'styled-system';

const buttonSize = (props) => variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: 0,
    },
    default: {
      fontSize: 1
    },
    large: {
      fontSize: 2
    }
  }
})

export default buttonSize;