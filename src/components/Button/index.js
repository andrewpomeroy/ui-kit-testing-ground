import React from 'react';
import styled from '@emotion/styled/macro';
import { borders, fontWeight } from 'styled-system';
import themeGet from '@styled-system/theme-get';
import { color, alignItems, justifyContent } from '@windsor/ui-kit-styled-system';
import buttonSize from './buttonSize';
import buttonShape from './buttonShape';
import buttonStyle from './buttonStyle';
import soloIconButtonStyle from './soloIconButtonStyle';

const transitionDuration = 50;

const ButtonNormalized = styled.button`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${alignItems}
  ${justifyContent}
  white-space: nowrap;
  padding: .75em 1.5em;
  border: 1px solid;
  ${borders}
  line-height: 1.25em;
  font-weight: 500;
  ${fontWeight}
  font-family: inherit;
  text-decoration: none;
  text-transform: none;
  background-color: transparent;
  color: inherit;
  user-select: none;
  transition: border-color ${transitionDuration}ms linear,
    background-color ${transitionDuration}ms linear,
    transform ${transitionDuration * 2}ms ease;
  &:focus {
    outline: 0;
  }
  /* "Not-disabled" styles */
  ${({ disabled }) =>
  !disabled && `
    cursor: pointer;
    &:active {
      transform: scale(.98);
    }
  `}
  /* Disabled styles */
  ${({ disabled }) =>
  disabled && `
    cursor: default;
    opacity: .4;
    pointer-events: none;
  `}
`

const ButtonThemed = styled(ButtonNormalized)`
  border: ${themeGet("buttons.borderWidth")}px solid;
  ${buttonStyle}
  ${buttonSize}
  ${buttonShape}
  ${color}
`
ButtonThemed.defaultProps = {
  buttonColor: 'neutral',
  size: 'default',
  shape: 'soft',
  buttonStyle: 'solid'
}
const Button = ({isDisabled, children, ...props}) => {
  console.log(isDisabled);
  let disabledAttr = isDisabled ? {'disabled': 'disabled'} : {};
  return (
    <ButtonThemed
      type="button"
      {...disabledAttr}
      {...props}>
      {children}
    </ButtonThemed>)
}

const iconButtonOffsetX = ".5em";

const IconButtonText = styled.span``
const IconButtonIconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: -.5em;
  margin-bottom: -.5em;
`
const IconButtonIconWrapLeft = styled(IconButtonIconWrap)`
  margin-right: ${props => props.offsetX || iconButtonOffsetX};
  margin-left: calc(-0.5 * ${props => props.offsetX || iconButtonOffsetX});
`
const IconButtonIconWrapRight = styled(IconButtonIconWrap)`
  margin-left: ${props => props.offsetX || iconButtonOffsetX};
  margin-right: calc(-0.5 * ${props => props.offsetX || iconButtonOffsetX});
`

export const IconButton = ({children, iconRight, iconLeft, offsetX, ButtonComponent = Button, ...props}) => {
  [iconLeft, iconRight].forEach((icon, key) => {
    if (!icon) return;
    icon = React.cloneElement(icon, {
      ...icon.props,
      size: "1.25em",
    })
  });

  return (
    <ButtonComponent {...props}>
      {!!iconLeft && 
        <IconButtonIconWrapLeft offsetX={offsetX}>
          {iconLeft}
        </IconButtonIconWrapLeft>
      }
      <IconButtonText>{children}</IconButtonText>
      {!!iconRight && 
        <IconButtonIconWrapRight offsetX={offsetX}>
          {iconRight}
        </IconButtonIconWrapRight>
      }
    </ButtonComponent>
  )
}
IconButton.defaultProps = {
  ButtonComponent: Button
}


export const SoloIconButtonInner = ({children, ...props}) => {
  return (
  <Button equilateral={true} {...props}>
    <IconButtonIconWrap>
      {children}
    </IconButtonIconWrap>
  </Button>
)}
export const SoloIconButton = styled(SoloIconButtonInner)`
  ${soloIconButtonStyle}
`
SoloIconButton.defaultProps = {
  buttonStyle: 'ghost',
  buttonColor: 'primary',
  shape: 'rounded'
}
  
// export const SoloIconButton = {...props,} => (
//   <ButtonThemed>

//   </ButtonThemed>
// )
// export const SoloIconButton = props => IconButtonSoloStyle({...props, equilateral: true})


export default Button;
