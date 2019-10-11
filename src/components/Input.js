import React, { useRef, useEffect } from "react";
import Color from 'color';
import styled from "@emotion/styled/macro";
import { otherColors } from "../theme";

const inputStyleProps = {
  fontSize: 16,
  lineHeight: 16,
  paddingH: 16,
  paddingV: 10,
  backgroundColor: 'white',
  color: otherColors.inputText,
  // iconColor: otherColors.inputBorder,
  // iconSize: 18,
  borderWidth: 1,
  borderColor: otherColors.inputBorder,
  borderRadius: 3,
  placeholderColor: '#719dff',
  // placeholderColor: Color('#719dff').fade(.5).string(),
}
const inputFocusedStyleProps = {
  borderColor: otherColors.activeHighlight,
  boxShadow: `0px 0px 2px ${otherColors.activeHighlight}`,
  outline: 0
}
const inputErrorStyleProps = {
  borderColor: otherColors.error,
  backgroundColor: Color(otherColors.error).fade(.9).string(),
  boxShadow: `0px 0px 2px ${otherColors.error}`,
  // outline: 0
}

const inputLabelStyleProps = {
  fontSize: 16,
  fontWeight: 400,
  color: otherColors.labelText,
  marginBottom: 8
}

const StyledInput = styled.input`
  width: 100%;
  font-size: ${inputStyleProps.fontSize}px;
  padding: ${inputStyleProps.paddingV}px ${inputStyleProps.paddingV}px;
  background-color: ${props => props.isError ? inputErrorStyleProps.backgroundColor : inputFocusedStyleProps.backgroundColor};
  border: ${inputStyleProps.borderWidth}px solid;
  border-color: ${inputStyleProps.borderColor};
  border-radius: ${inputStyleProps.borderRadius}px;
  ::placeholder {
    color: ${inputStyleProps.placeholderColor};
  }
  &:focus {
    border-color: ${inputFocusedStyleProps.borderColor};
    outline: ${inputFocusedStyleProps.outline};
    box-shadow: ${props => props.isError ? inputErrorStyleProps.boxShadow : inputFocusedStyleProps.boxShadow};
  }
  &, &:focus {
    ${props => props.isError && `border-color: ${inputErrorStyleProps.borderColor};`}
  }
`

const Input = ({willAutoFocus, ...props}) => {
  const ref = useRef();
  useEffect(() => {
    if (willAutoFocus) {
      if (ref.current && document.activeElement !== ref.current) {
        ref.current.focus();
      }
    }
  }, [willAutoFocus])

  return <StyledInput ref={ref} {...props} />
};

export const InputLabel = styled.label`
  display: inline-block;
  font-size: ${inputLabelStyleProps.fontSize}px;
  font-weight: ${inputLabelStyleProps.fontWeight};
  color: ${props => props.isError ? otherColors.error : inputLabelStyleProps.color};
  margin-bottom: ${inputLabelStyleProps.marginBottom}px;
`

export default Input;