import React from 'react';
import './App.scss';
import styled from '@emotion/styled/macro';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Box, Flex } from '@windsor/ui-kit-core';
import theme from './theme';
import Button from './components/Button/index.js';
import Input from './components/Input';

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
                  <div style={{marginRight: '1em'}}></div>
                  <Button
                    size="default">Medium</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button
                    size="large">Large</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button
                    size="larger">Larger</Button>
                </Flex>
                <Box height="10" />
                <Flex mb={10}>
                  <Button buttonColor="neutral"
                    >Neutral</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button
                    buttonColor="primary">Primary</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button buttonColor="success">Success</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button buttonColor="danger">Danger</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button buttonColor="pink">Pink!?</Button>
                </Flex>
                <Flex mb={10}>
                  <Button shape="rounded" buttonColor="neutral"
                    >Neutral</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button
                    shape="rounded" buttonColor="primary">Primary</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button shape="rounded" buttonColor="success">Success</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button shape="rounded" buttonColor="danger">Danger</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button shape="rounded" buttonColor="pink">Pink!?</Button>
                </Flex>
                <Box height="10" />
                <Flex mb={10}>
                  <Button buttonStyle="hollow" buttonColor="neutral"
                    >Neutral</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button buttonStyle="hollow"
                    buttonColor="primary">Primary</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button buttonStyle="hollow" buttonColor="success">Success</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button buttonStyle="hollow" buttonColor="danger">Danger</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button buttonStyle="hollow" buttonColor="pink">Pink!?</Button>
                </Flex>
                <Box height="10" />
                <Flex mb={10}>
                  <Button buttonStyle="text" buttonColor="neutral"
                    >Neutral</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button buttonStyle="text"
                    buttonColor="primary">Primary</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button buttonStyle="text" buttonColor="success">Success</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button buttonStyle="text" buttonColor="danger">Danger</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button buttonStyle="text" buttonColor="pink">Pink!?</Button>
                </Flex>
                <Flex mb={10}>
                  <Input />
                  <Box mr="1em" />
                  <Button
                    buttonColor="primary">Primary</Button>
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
