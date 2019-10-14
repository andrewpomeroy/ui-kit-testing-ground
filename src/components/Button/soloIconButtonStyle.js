import tinycolor2 from 'tinycolor2';
import { variant } from 'styled-system';
import { getThemeColor } from '@windsor/ui-kit-styled-system';

const soloIconButtonStyle = props => {
  return variant({
  prop: 'buttonStyle',
  variants: {
    ghost: {
      color: getThemeColor(`${props.buttonColor}.500`)(props),
      borderColor: "transparent",
      backgroundColor: "transparent",
      '&:hover, &:focus': {
        color: getThemeColor(`${props.buttonColor}.800`)(props),
        backgroundColor: getThemeColor(`${props.buttonColor}.A200`)(props),
        borderColor: getThemeColor(`${props.buttonColor}.A200`)(props),
      }
    },
    hollow: {
      color: getThemeColor(`${props.buttonColor}.500`)(props),
      borderColor: getThemeColor(`${props.buttonColor}.500`)(props),
      backgroundColor: "transparent",
      '&:hover, &:focus': {
        color: getThemeColor(`white.500`)(props),
        backgroundColor: getThemeColor(`${props.buttonColor}.500`)(props),
        borderColor: getThemeColor(`${props.buttonColor}.500`)(props),
      }
    },
  }
})}

export default soloIconButtonStyle;