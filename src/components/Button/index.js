import React from 'react';
import styled from '@emotion/styled/macro';
import { borders, fontWeight } from 'styled-system';
import themeGet from '@styled-system/theme-get';
import { color, alignItems, justifyContent } from '@windsor/ui-kit-styled-system';
import buttonSize from './buttonSize';
import buttonShape from './buttonShape';
import buttonStyle from './buttonStyle';

const transitionDuration = 50;

const BasicButton = styled.button`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${alignItems}
  ${justifyContent}
  padding: .9em 1.5em;
  border: 1px solid;
  ${borders}
  line-height: 1em;
  ${fontWeight}
  color: inherit;
  transition: border-color ${transitionDuration}ms linear,
    background-color ${transitionDuration}ms linear,
    transform ${transitionDuration * 2}ms ease;
  &:active {
    transform: scale(.98);
  }
  &:focus {
    outline: 0;
  }
  &[disabled] {
    opacity: .4;
  }
  &:not([disabled]) {
    cursor: pointer;
  }
`

const StyledButton = styled(BasicButton)`
  border: ${themeGet("buttons.borderWidth")}px solid;
  ${buttonStyle}
  ${buttonSize}
  ${buttonShape}
  ${color}
`
StyledButton.defaultProps = {
  buttonBorder: 'default',
  buttonColor: 'neutral',
  size: 'default',
  shape: 'default',
  buttonStyle: 'default'
}
const Button = ({isDisabled, children, ...props}) => {
  return (
    <StyledButton
      type="button"
      disabled={isDisabled}
      {...props}>
      {children}
    </StyledButton>)
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

export const SoloIconButton = ({children, ...props}) => {
  return (
  <Button equilateral={true} {...props}>
    <IconButtonIconWrap>
      {children}
    </IconButtonIconWrap>
  </Button>
)}
  
// export const SoloIconButton = {...props,} => (
//   <StyledButton>

//   </StyledButton>
// )
// export const SoloIconButton = props => IconButtonSoloStyle({...props, equilateral: true})


export default Button;
