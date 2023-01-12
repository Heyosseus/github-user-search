import React, { useState } from 'react';
import styled from 'styled-components';
import moon from '../assets/icon-moon.svg';
import sun from '../assets/icon-sun.svg';
import search from '../assets/icon-search.svg';
import axios from 'axios';

function Header(props: any) {
  const handleClick = () => {
    props.setLightMode(!props.lightMode);
  };

  const fetchData = () => {
    axios
      .get(`https://api.github.com/users/${props.user}`)
      .then((res) => {
        const users = res.data;

        console.log({ users });
        props.setConfigs(users);
        console.log(users.name);
      })
      .catch((error) => {
        console.log(error);
        //  setError('No Results');
      });
  };
  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <Heading lightMode={props.lightMode}>devfinder</Heading>
        <LightMode onClick={handleClick}>
          {props.lightMode ? 'DARK' : 'LIGHT'}
          <Img src={props.lightMode ? moon : sun} alt="sun"></Img>
        </LightMode>
      </div>

      <div lightMode={props.lightMode}>
        <Form lightMode={props.lightMode}>
          <SearchImage src={search}></SearchImage>
          <Input
            type="text"
            placeholder="Search GitHub username…"
            lightMode={props.lightMode}
            onChange={(e) => props.setUser(e.target.value)}
          />
          <Button onClick={fetchData}>Search</Button>
        </Form>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 90vw;
  @media (min-width: 678px){
    margin: 64px;
    width: 80vw;
  }
  @media (min-width: 1024px){
    width: 760px;
  }
`;
const Heading = styled.h1`
  font-size: 26px;
  line-height: 40px;
  color: ${(props) => (props.lightMode ? '#222731' : '#F6F8FF')};
`;

const LightMode = styled.div`
  letter-spacing: 2.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 13px;
  margin-left: auto;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const Form = styled.div`
  width: 90vw;
  height: 60px;
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.lightMode
      ? '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
      : ''};
  display: flex;
  margin-top: 32px;
  background: ${(props) => (props.lightMode ? '#F6F8FF' : '#1e2a47')};
  @media (min-width: 678px) {
    width: 80vw;
    height: 69px;
  }
  @media (min-width: 1024px) {
    width: 760px;
 
  }
`;

const SearchImage = styled.img`
  width: 21px;
  height: 21px;
  color: var(--priamry-blue);
  display: flex;
  align-self: center;
  margin-left: 12px;
`;

const Input = styled.input`
  background: ${(props) => (props.lightMode ? '#F6F8FF' : '#1e2a47')};
  color: ${(props) => (props.lightMode ? '#4B6A9B' : '#F6F8FF')};
  width: 224px;
  height: 24px;
  align-self: center;
  border: none;
  font-size: 13px;
  outline: none;
  margin-left: 24px;
  letter-spacing: 1.1px;
  ::placeholder {
    color: ${(props) => (props.lightMode ? '#4B6A9B' : '#F6F8FF')};
    letter-spacing: 1.1px;
  }
  @media (min-width: 678px) {
    width: 554px;
    font-size: 18px;
    
  }
  
`;

const Button = styled.button`
  display: block;
  width: 84px;
  height: 42px;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  border: none;
  outline: none;
  align-self: center;
  margin-right: 6px;
  background: #0079ff;
  line-height: 21px;
  &:hover {
    cursor: pointer;
    background: #60abff;
    transition: all 0.3s ease;
  }
  @media (min-width: 678px) {
    width:106px;
    font-size: 16px;
  }
`;