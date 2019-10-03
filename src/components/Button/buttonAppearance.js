import tinycolor2 from 'tinycolor2';
import { variant } from 'styled-system';
import { color, getColor, getThemeColor } from '@windsor/ui-kit-styled-system';
import themeGet from '@styled-system/theme-get';

// The instances of `props.variant` resolve to 'primary', 'danger', etc., which work correctly for the moment since they point to the raw color value found under that key in the theme object.
// It's not clear how this will work when the theme spits out the more complex color object for each of these.
// Unfortunately we have no way to use our custom style-function 'color' accessor here, like we do when creating custom styled-components

const buttonAppearance = props => {
  return variant({
  prop: 'appearance',
  variants: {
    default: {
      // backgroundColor: themeGet(`colors.${props.variant}.600.hex`)(props),
      // borderColor: themeGet(`colors.${props.variant}.600.hex`)(props),
      backgroundColor: getThemeColor(`${props.variant}.500`)(props),
      borderColor: getThemeColor(`${props.variant}.500`)(props),
      color: getThemeColor('white.500')(props),
      "&:hover": {
        backgroundColor: getThemeColor(`${props.variant}.400`)(props),
        borderColor: getThemeColor(`${props.variant}.400`)(props)
      },
      "&:active": {
        backgroundColor: getThemeColor(`${props.variant}.600`)(props),
        borderColor: getThemeColor(`${props.variant}.600`)(props)
      }
    },
    hollow: {
      backgroundColor: 'transparent',
      color: getThemeColor(`${props.variant}.500`)(props),
      borderColor: getThemeColor(`${props.variant}.500`)(props),
      fontWeight: 600,
      "&:hover": {
        backgroundColor: tinycolor2(getThemeColor(`${props.variant}.500`)(props)).setAlpha(0.1).toHslString(),
        borderColor: getThemeColor(`${props.variant}.600`)(props),
      }
    },
    text: {
      backgroundColor: 'transparent',
      color: props.variant,
      borderColor: 'transparent',
      fontWeight: 600,
      // Keeps semiopaque borders & backgrounds from overlapping
      backgroundClip: 'padding-box', 
      "&:hover": {
        backgroundColor: tinycolor2(getThemeColor(`${props.variant}.500`)(props)).setAlpha(0.25).toHslString(),
        borderColor: tinycolor2(getThemeColor(`${props.variant}.500`)(props)).setAlpha(0.25).toHslString(),
        color: getThemeColor(`${props.variant}.900`)(props),
      }
    }
  }
})}

export default buttonAppearance;