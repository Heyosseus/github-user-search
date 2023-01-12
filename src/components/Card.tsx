import React from 'react';
import styled from 'styled-components';
import location from '../assets/icon-location.svg';
import company from '../assets/icon-company.svg';
import twitter from '../assets/icon-twitter.svg';
import website from '../assets/icon-website.svg';
function Card(props: any) {
  return (
    <Container lightMode={props.lightMode}>
      <div style={{ display: 'flex' }}>
        <Avatar src={props.configs.avatar_url}></Avatar>
        <div>
          <Heading lightMode={props.lightMode}>
            {props.configs.name}
          </Heading>
          <Username>@{props.configs.login}</Username>
          <JoinInfo lightMode={props.lightMode}>
            {' '}
            Joined - {props.configs.created_at}
          </JoinInfo>
        </div>
      </div>
      <Bio lightMode={props.lightMode}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Done
        c odio. Quisque volutpat mattis eros.
      </Bio>
      <CardInfo lightMode={props.lightMode}>
        <div>
          <HeadingInfos lightMode={props.lightMode}>
            Repos{' '}
          </HeadingInfos>
          <Values lightMode={props.lightMode}>
            {props.configs.public_repos}
          </Values>
        </div>
        <div>
          <HeadingInfos lightMode={props.lightMode}>
            {' '}
            Follower{' '}
          </HeadingInfos>
          <Values lightMode={props.lightMode}>
            {props.configs.followers}
          </Values>
        </div>
        <div>
          <HeadingInfos lightMode={props.lightMode}>
            {' '}
            Followong
          </HeadingInfos>
          <Values lightMode={props.lightMode}>
            {props.configs.following}
          </Values>
        </div>
      </CardInfo>
      <Footer>
        <div>
          <Wrapper>
            <SVG src={location}></SVG>
            <Place>
              {props.configs.twitter_username || 'Not Available'}
            </Place>
          </Wrapper>
          <Wrapper>
            <SVG src={twitter}></SVG>
            <Place>{props.configs.location || 'Not Available'}</Place>
          </Wrapper>
        </div>
        <div>
          <Wrapper>
            <SVG src={website}></SVG>
            <Place>
              {props.configs.repos__url || 'Not Available'}
            </Place>
          </Wrapper>
          <Wrapper>
            <SVG src={company}></SVG>
            <Place>{props.configs.company || 'Not Available'}</Place>
          </Wrapper>
        </div>
      </Footer>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  width: 90vw;
  height: 517px;
  background: ${(props) => (props.lightMode ? '#FEFEFE' : '#1e2a47')};
  color: ${(props) => (props.lightMode ? '#4B6A9B' : '#F6F8FF')};
  box-shadow: ${(props) =>
    props.lightMode
      ? '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
      : ''};
  margin-top: 24px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  @media (min-width: 678px) {
    margin: 0 64px;
    width: 80vw;
    height: 573px;
  }
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 760px
    
  }
`;

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  background-size: contain;
  border-radius: 50%;
  margin-left: 24px;
  margin-top: 24px;
  @media (min-width: 678px) {
    height: 117px;
    width: 117px;
  }
`;

const Heading = styled.h2`
  display: flex;
  width: 226px;
  font-size: 16px;
  margin-top: 34px;
  margin-left: 17px;
  color: ${(props) => (props.lightMode ? '#2B3442' : '#F6F8FF')};
  @media (min-width: 678px) {
    font-size: 26px;
    margin-left: 44px;
  }
  @media (min-width: 1024px) {
    font-size: 28px;
    margin-left: 64px;
    letter-spacing: 1px;
  }
`;

const Username = styled.p`
  font-size: 12px;
  color: #0079ff;
  font-weight: 400;
  margin-left: 17px;
  @media (min-width: 678px) {
    font-size: 16px;
    margin-left: 44px;
  }
  @media (min-width: 1024px) {
    margin-left: 64px;
    letter-spacing: 1px;
  }
`;

const JoinInfo = styled.p`
  margin-left: 17px;
  margin-top: 12px;
  width: 266px;
  height: 22px;
  font-size: 11px;
  opacity: 60%;
  color: ${(props) => (props.lightMode ? '#2B3442' : '#F6F8FF')};
  @media (min-width: 678px) {
    font-size: 16px;
    margin-left: 44px;
    width: 366px;
  }
  @media (min-width: 1024px) {
    margin-left: 64px;
    letter-spacing: 1px;
  }
`;

const Bio = styled.p`
  width: 80vw;
  height: 75px;
  color: ${(props) => (props.lightMode ? '#4B6A9B' : '#F6F8FF')};
  font-size: 13px;
  margin: 24px;
  margin-top: 35px;
  line-height: 25px;
  @media (min-width: 678px) {
    font-size: 16px;
    margin-left: 44px;
    width: 546px;
    line-height: 32px;
  }
`;

const CardInfo = styled.div`
  background: ${(props) => (props.lightMode ? '#F6F8FF' : '#141D2F')};
  box-shadow: ${(props) =>
    props.lightMode
      ? '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
      : ''};
  width: 80vw;
  height: 80px;
  margin-top: 12px;
  display: flex;
  /* flex-direction: column; */
  margin-left: 24px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 678px) {
    font-size: 16px;
    height: 95px;
    width: 500px;
    margin-left: 44px;
  }
  @media (min-width: 1024px) {
    width: 520px;
    margin-left: 0;
  }
`;

const HeadingInfos = styled.p`
  display: flex;
  justify-content: center;
  color: ${(props) => (props.lightMode ? '#4B6A9B' : '#F6F8FF')};
  font-size: 12px;
  margin-top: 12px;
`;

const Values = styled.p`
  display: flex;
  justify-content: space-around;
  color: ${(props) => (props.lightMode ? '#2B3442' : '#F6F8FF')};
  font-size: 22px;
  margin-top: 2px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  @media (min-width: 678px) {
    display: flex;
    flex-direction: row;
    margin: 24px;
    justify-content: space-between;
    width: 540px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  margin: 20px 24px 0 24px;
  gap: 16px;
`;

const SVG = styled.img`
  width: 14px;
  height: 20px;
  @media (min-width: 678px) {
    width: 18px;
    height: 20px;
  }
`;

const Place = styled.p`
  font-family: var(--space-mono);
  font-weight: 400;
  font-size: 15px;
  width: 120px;
  @media (min-width: 678px) {
    font-size: 17px;
    width: 100%;
  }
`;
