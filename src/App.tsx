import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import Header from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const [lightMode, setLightMode] = useState(true);
  const [user, setUser] = useState('');
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
    <Main lightMode={lightMode}>
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
  );
}

export default App;



const Main = styled.body`
  background: ${(props) => (props.lightMode ? '#F6F8FF' : '#141d2f')};
  color: ${(props) => (props.lightMode ? '#4B6A9B' : 'white')};
  @media (min-width:1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;