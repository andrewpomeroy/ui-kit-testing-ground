import { variant } from 'styled-system';

const buttonSize = (props) => variant({
  prop: 'size',
  variants: {
    ...props.theme.buttonSizes
    // small: {
    //   fontSize: 0,
    //   paddingY: "10px",
    //   paddingX: "16px"
    // },
    // default: {
    //   fontSize: 1
    // },
    // large: {
    //   fontSize: 2
    // }
  }
})

export default buttonSize;