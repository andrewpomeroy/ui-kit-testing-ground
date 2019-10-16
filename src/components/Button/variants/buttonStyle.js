import tinycolor2 from 'tinycolor2';
import { variant } from 'styled-system';
import { getThemeColor } from '@windsor/ui-kit-styled-system';

const buttonStyle = props => {
  return variant({
  prop: 'buttonStyle',
  variants: {
    solid: {
      fontWeight: 500,
      // backgroundColor: themeGet(`colors.${props.buttonColor}.600.hex`)(props),
      // borderColor: themeGet(`colors.${props.buttonColor}.600.hex`)(props),
      backgroundColor: getThemeColor(`${props.buttonColor}.500`)(props),
      borderColor: getThemeColor(`${props.buttonColor}.500`)(props),
      color: getThemeColor('white.500')(props),
      "&:hover, &:focus": {
        backgroundColor: getThemeColor(`${props.buttonColor}.300`)(props),
        borderColor: getThemeColor(`${props.buttonColor}.300`)(props)
      },
      "&:active": {
        backgroundColor: getThemeColor(`${props.buttonColor}.600`)(props),
        borderColor: getThemeColor(`${props.buttonColor}.600`)(props)
      }
    },
    hollow: {
      color: getThemeColor(`${props.buttonColor}.600`)(props),
      backgroundColor: 'transparent',
      borderColor: getThemeColor(`${props.buttonColor}.500`)(props),
      fontWeight: 600,
      "&:hover, &:focus": {
        // backgroundColor: tinycolor2(getThemeColor(`${props.buttonColor}.500`)(props)).setAlpha(0.1).toHslString(),
        color: getThemeColor(`${props.buttonColor}.800`)(props),
        backgroundColor: getThemeColor(`${props.buttonColor}.A200`)(props),
        // borderColor: getThemeColor(`${props.buttonColor}.600`)(props),
      }
    },
    text: {
      backgroundColor: 'transparent',
      color: getThemeColor("link.500")(props),
      borderColor: 'transparent',
      fontWeight: 600,
      // Keeps semiopaque borders & backgrounds from overlapping
      backgroundClip: 'padding-box', 
      "&:hover, &:focus": {
        backgroundColor: tinycolor2(getThemeColor(`${props.buttonColor}.500`)(props)).setAlpha(0.25).toHslString(),
        borderColor: tinycolor2(getThemeColor(`${props.buttonColor}.500`)(props)).setAlpha(0.25).toHslString(),
        color: getThemeColor(`${props.buttonColor}.900`)(props),
      },
    },
  }
})}

export default buttonStyle;