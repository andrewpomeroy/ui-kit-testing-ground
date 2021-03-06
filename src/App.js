import React from 'react';
import './App.scss';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Box, Flex } from '@windsor/ui-kit-core';
import theme from './theme';
import Button, { IconButton, SoloIconButton } from './components/Button/index.js';
import Input from './components/Input';
import Icon from '@windsor/ui-kit-icons';
import ButtonSet from './components/ButtonSet';
import ToggleButtons, { ToggleButton } from './components/ToggleButtons';

console.log(theme);

const globalStyles = css`
  body, input, button, textarea, select, h1, h2, h3, h4, h5, h6 {
    /* font-family: inherit; */
  }
  html, body {
    height: 100vh;
    width: 100vw;
  }
  body, #root {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
  }
`

const AppBackground = styled.div`
  background-color: gray;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`
const AppCenterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const AppCenterColumn = styled.div`
  flex: 1;
  max-width: 768px;
`
const Background = styled.div`
  background-color: white;
  padding: 2rem;
`

function App() {
  return (
    <>
      <Global styles={globalStyles}></Global>
      <ThemeProvider theme={theme}>

        <AppBackground>
          <AppCenterContainer>
            <AppCenterColumn>
              <Background>
                <Flex alignItems="flex-end" mb={10}>
                  <Button
                    size="small">Small</Button>
                  <Box mr="1em" />
                  <Button
                    size="medium">Medium</Button>
                  <Box mr="1em" />
                  <Button
                    size="large">Large</Button>
                  <Box mr="1em" />
                  <Button
                    size="larger">Larger</Button>
                </Flex>
                <Flex mb={10}>
                  <Button buttonColor="neutral"
                    >Neutral</Button>
                  <Box mr="1em" />
                  <Button
                    buttonColor="primary">Primary</Button>
                  <Box mr="1em" />
                  <Button buttonColor="success">Success</Button>
                  <Box mr="1em" />
                  <Button buttonColor="danger">Danger</Button>
                  <Box mr="1em" />
                  <Button buttonColor="warning">Warning</Button>
                  <Box mr="1em" />
                  <Button buttonColor="pink">Pink!?</Button>
                </Flex>
                <Flex mb={10}>
                  <Button shape="rounded" buttonColor="neutral"
                    >Neutral</Button>
                  <Box mr="1em" />
                  <Button
                    shape="rounded" buttonColor="primary">Primary</Button>
                  <Box mr="1em" />
                  <Button shape="rounded" buttonColor="success">Success</Button>
                  <Box mr="1em" />
                  <Button shape="rounded" buttonColor="danger">Danger</Button>
                  <Box mr="1em" />
                  <Button shape="rounded" buttonColor="warning">Warning</Button>
                  <Box mr="1em" />
                  <Button shape="rounded" buttonColor="pink">Pink!?</Button>
                </Flex>
                <Box height="10" />
                <Flex mb={10}>
                  <Button buttonStyle="hollow" buttonColor="neutral"
                    >Neutral</Button>
                  <Box mr="1em" />
                  <Button buttonStyle="hollow"
                    buttonColor="primary">Primary</Button>
                  <Box mr="1em" />
                  <Button buttonStyle="hollow" buttonColor="success">Success</Button>
                  <Box mr="1em" />
                  <Button buttonStyle="hollow" buttonColor="danger">Danger</Button>
                  <Box mr="1em" />
                  <Button buttonStyle="hollow" buttonColor="warning">Warning</Button>
                  <Box mr="1em" />
                  <Button buttonStyle="hollow" buttonColor="pink">Pink!?</Button>
                </Flex>
                <Box height="10" />
                <Flex mb={10}>
                  <Button buttonStyle="text" buttonColor="neutral"
                    >Neutral</Button>
                  <Box mr="1em" />
                  <Button buttonStyle="text"
                    buttonColor="primary">Primary</Button>
                  <Box mr="1em" />
                  <Button buttonStyle="text" buttonColor="success">Success</Button>
                  <Box mr="1em" />
                  <Button buttonStyle="text" buttonColor="danger">Danger</Button>
                  <Box mr="1em" />
                  <Button buttonStyle="text" buttonColor="warning">Warning</Button>
                  <Box mr="1em" />
                  <Button buttonStyle="text" buttonColor="pink">Pink!?</Button>
                </Flex>
                <Flex mb={10}>
                  <Button
                    isDisabled={true}>Disabled Button</Button>
                  <Box mr="1em" />
                  <Button
                    isDisabled={true} shape="rounded">Disabled Button</Button>
                  <Box mr="1em" />
                  <Button
                    isDisabled={true} buttonStyle="hollow">Disabled Button</Button>
                  <Box mr="1em" />
                  <Button
                    isDisabled={true} buttonStyle="text">Disabled Button</Button>
                  <Box mr="1em" />
                </Flex>
                <Flex mb={10}>
                  <Input />
                  <Box mr="1em" />
                  <Button
                    buttonColor="primary">Primary</Button>
                </Flex>
                <Flex mb={10} alignItems="flex-end">
                  <IconButton iconRight={<Icon name="ChevronCircle" />}>Next</IconButton>
                  <Box mr="1em" />
                  <IconButton iconLeft={<Icon name="User" />}>Profile</IconButton>
                  <Box mr="1em" />
                  <SoloIconButton size="small" buttonStyle="solid" shape="soft"><Icon name="X"/></SoloIconButton>
                  <Box mr="1em" />
                  <SoloIconButton size="small" buttonStyle="hollow"><Icon name="X" /></SoloIconButton>
                  <Box mr="1em" />
                  <SoloIconButton size="medium" buttonStyle="hollow"><Icon name="X" /></SoloIconButton>
                  <Box mr="1em" />
                  <SoloIconButton size="medium"><Icon name="X" /></SoloIconButton>
                  <Box mr="1em" />
                  <SoloIconButton size="large" buttonStyle="hollow"><Icon name="X" /></SoloIconButton>
                  <Box mr="1em" />
                  <SoloIconButton size="larger" buttonStyle="hollow"><Icon name="X" /></SoloIconButton>
                  <Box mr="1em" />
                  <SoloIconButton size="larger" buttonStyle="ghost" buttonColor="neutral"><Icon name="X" /></SoloIconButton>
                </Flex>
                <Flex mb={10} alignItems="flex-end">
                  <ButtonSet>
                    <Button buttonStyle="hollow" buttonColor="neutral"
                    >Neutral</Button>
                    <Button buttonStyle="hollow" buttonColor="neutral"
                    >Neutral</Button>
                  </ButtonSet>
                  <Box mr="1em"></Box>
                  <ButtonSet>
                    <Button buttonStyle="hollow" buttonColor="primary"
                    >Primary</Button>
                    <Button buttonStyle="hollow" buttonColor="neutral"
                    >Neutral</Button>
                    <Button buttonStyle="hollow" buttonColor="danger"
                    >Danger</Button>
                  </ButtonSet>
                  <Box mr="1em"></Box>
                  <ButtonSet>
                    <Button buttonColor="primary"
                    >Primary</Button>
                    <Button buttonColor="neutral"
                    >Neutral</Button>
                    <Button buttonColor="danger"
                    >Danger</Button>
                  </ButtonSet>
                </Flex>
                <Flex mb={10} alignItems="flex-end">
                  <ToggleButtons name="toggleButtons" intialValue={1}>
                    <ToggleButton value={1}>Toggle Button 1</ToggleButton>
                    <ToggleButton value={2}>Toggle Button 2</ToggleButton>
                    <ToggleButton value={3}>Toggle Button 3</ToggleButton>
                  </ToggleButtons>
                </Flex>
              </Background>
            </AppCenterColumn>
          </AppCenterContainer>
        </AppBackground>
      </ThemeProvider>
    </>
  );
}

export default App;
