import React from 'react';
import styled from '@emotion/styled/macro';
import { borders, fontWeight, variant } from 'styled-system';
import buttonSize from './buttonSize';
import buttonShape from './buttonShape';
import buttonAppearance from './buttonAppearance';

const transitionDuration = 50;

const StyledButton = styled.button`
  position: relative;
  color: inherit;
  border: 0;
  border: 2px solid;
  padding: .9em 1.5em;
  ${borders}
  ${fontWeight}
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
  ${buttonAppearance}
  ${buttonShape}
  ${buttonSize}
`
StyledButton.defaultProps = {
  variant: 'neutral',
  size: 'default',
  shape: 'default',
  appearance: 'default'
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

export default Button;
