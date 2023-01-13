import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import Header from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles';


function App() {
  const [lightMode, setLightMode] = useState<any>(false);
  const [user, setUser] = useState<string>('');
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Heyosseus', {
      headers: {
        Authorization: `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`,
      },
    })
      .then((data) => data.text())
      .then((res) => setConfigs(JSON.parse(res)));
  }, []);


  
  return (
    <ThemeProvider theme={{ lightMode: lightMode }}>
      <Main>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header
        lightMode={lightMode}
        setLightMode={setLightMode}
        user={user}
        setUser={setUser}
        configs={configs}
        setConfigs={setConfigs}
      />
      <Card
        lightMode={lightMode}
        setLightMode={setLightMode}
        user={user}
        setUser={setUser}
        configs={configs}
        setConfigs={setConfigs}
      />
    </Main>
    </ThemeProvider>
  );
}

export default App;



const Main = styled.body`
  background: ${(props) =>
    props.theme.lightMode ? '#F6F8FF' : '#141d2f'};
  color: ${(props) => (props.theme.lightMode ? '#4B6A9B' : 'white')};
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;