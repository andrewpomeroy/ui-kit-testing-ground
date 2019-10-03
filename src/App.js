import React from 'react';
import './App.scss';
import styled from '@emotion/styled/macro';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Box, Flex, BorderBox } from '@windsor/ui-kit-core';
import theme from './theme';
import Button from './components/Button/index.js';

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
                </Flex>
                <Box height="10" />
                <Flex mb={10}>
                  <Button variant="neutral"
                    >Neutral</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button
                    variant="primary">Primary</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button variant="success">Success</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button variant="danger">Danger</Button>
                </Flex>
                <Flex mb={10}>
                  <Button shape="rounded" variant="neutral"
                    >Neutral</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button
                    shape="rounded" variant="primary">Primary</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button shape="rounded" variant="success">Success</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button shape="rounded" variant="danger">Danger</Button>
                </Flex>
                <Box height="10" />
                <Flex mb={10}>
                  <Button appearance="hollow" variant="neutral"
                    >Neutral</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button appearance="hollow"
                    variant="primary">Primary</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button appearance="hollow" variant="success">Success</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button appearance="hollow" variant="danger">Danger</Button>
                </Flex>
                <Box height="10" />
                <Flex mb={10}>
                  <Button appearance="text" variant="neutral"
                    >Neutral</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button appearance="text"
                    variant="primary">Primary</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button appearance="text" variant="success">Success</Button>
                  <div style={{marginRight: '1em'}}></div>
                  <Button appearance="text" variant="danger">Danger</Button>
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
