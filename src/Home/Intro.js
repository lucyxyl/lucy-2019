import React from 'react';
import styled from 'styled-components';

const Intro = () => {
  return (
    <section className="wrap">
      <IntroSection>
        <IntroTop>
          <h1>Lucy.</h1>
          <Subtitle gap>[loo-see]</Subtitle>
          <Button>
            <a
              href="https://drive.google.com/file/d/1-lurzXLBq_RPXejTw7n2AZDMcLhVVVgf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              résumé
            </a>
          </Button>
        </IntroTop>
        <IntroMiddle>
          <Subtitle line>
            <SubtitleBg>Noun</SubtitleBg>
          </Subtitle>
        </IntroMiddle>
        <IntroDetails>
          <FeatureText>
            👋🏼 — I'm a senior product designer based in San Francisco Bay Area. <br />
            <br />
            Over the past 6 years, I’ve been fortunate enough to solve interesting problems at several different industries.
            Most notably, I led 0-1 products at Alto pharmacy and Earnin, helped scale the network visibility tools at Appneta, and conceptualized a surgical ecosystem at Intuitive Surgical. <br />
            <br />
          </FeatureText>
        </IntroDetails>
      </IntroSection>
    </section>
  );
};

const IntroTop = styled.div`
  display: flex;
  padding: 0 0 2em 0;
  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;
const IntroMiddle = styled.div`
  padding: 0 0 2em 0;
`;

const Subtitle = styled.h6`
  line-height: ${props => (props.line ? '0.1em' : '4em')};
  padding-left: ${props => (props.gap ? '1em' : '0')};
  border-bottom: ${props => (props.line ? '1px solid #D0D0D0' : 'none')};
  margin: ${props => (props.line ? '10px 0 20px' : 'none')};
  width: 40%;
  font-family: MinionRegular;
  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`;
const SubtitleBg = styled.span`
  background: #ffffff;
  padding: 0 0.5em 0 0;
`;

const FeatureText = styled.p`
  background: ${props => (props.primary ? '#222226' : '#FFFFFF')};
  color: ${props => (props.primary ? '#FFFFFF' : '#222226')};
  line-height: 1.6em;
  @media (min-width: 769px) {
    font-size: 1.6em;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 1.28em;
  }
`;

const Button = styled.button`
  line-height: 1.6em;
  background-color: #fff;
  @media (min-width: 769px) {
    font-size: 1.6em;
    margin-left: auto;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 1.28em;
    display: none;
  }
`;

const IntroSection = styled.div``;

const IntroDetails = styled.div``;

export default Intro;
