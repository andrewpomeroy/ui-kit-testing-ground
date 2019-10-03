import { variant } from 'styled-system';

// The instances of `props.variant` resolve to 'primary', 'danger', etc., which work correctly for the moment since they point to the raw color value found under that key in the theme object.
// It's not clear how this will work when the theme spits out the more complex color object for each of these.
// Unfortunately we have no way to use our custom style-function 'color' accessor here, like we do when creating custom styled-components

const buttonAppearance = props => {
  return variant({
  prop: 'appearance',
  variants: {
    default: {
      backgroundColor: props.variant,
      borderColor: props.variant,
      color: 'white'
    },
    hollow: {
      backgroundColor: 'transparent',
      color: props.variant,
      borderColor: props.variant,
      fontWeight: 600,
      "&:hover": {
        backgroundColor: props.variant,
        borderColor: props.variant,
        color: 'white'
      }
    },
    text: {
      backgroundColor: 'transparent',
      color: props.variant,
      borderColor: 'transparent',
      "&:hover": {
        backgroundColor: props.variant,
        borderColor: props.variant,
        color: 'white'
      }
    }
  }
})}

export default buttonAppearance;