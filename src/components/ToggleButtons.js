import React, { useState, useMemo, useContext, useEffect, useRef } from 'react';
import styled from '@emotion/styled/macro';
import ButtonSet from './ButtonSet';
import Button from './Button';
import uuid4 from 'uuid4';

const ToggleButtonsContext = React.createContext({});

const ToggleButtons = React.forwardRef(({children, ...props}, ref) => {
  const [activeValue, setActiveValue] = useState(props.initialValue)
  const uuid = useRef(uuid4());
  const memoizedContext = useMemo(() => ({name: props.name || uuid.current, activeValue, setActiveValue}), [activeValue, props.name])
  return (
    <ToggleButtonsContext.Provider value={memoizedContext}>
      <ButtonSet ref={ref}>
        {children}
      </ButtonSet>
    </ToggleButtonsContext.Provider>
  );
})

export default ToggleButtons;

const HiddenRadioBtn = styled.input`
  position: absolute;
  clip: rect(0,0,0,0);
  pointer-events: none;
`
HiddenRadioBtn.defaultProps = {
  type: "radio",
  autoComplete: "off"
}

export const ToggleButton = React.forwardRef(({style, children, value}, ref) => {
  const {name, activeValue, setActiveValue} = useContext(ToggleButtonsContext);
  const isActive = activeValue === value;
  const uuid = useRef(uuid4());

  return (
    <Button ref={ref} as="label" style={style} buttonStyle={isActive ? 'solid' : 'hollow'} onClick={() => setActiveValue(value)}>
      <HiddenRadioBtn name={name} id={uuid.current} checked={isActive ? true : undefined} />
      {children}
    </Button>
  )
})