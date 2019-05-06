import React from 'react';
import styled from 'styled-components';

import Fig1 from '../Image/About_Fig1.png';
import Fig2 from '../Image/About_Fig2.png';
import Fig3 from '../Image/About_Fig3.png';

const AboutIntro = () => {
  return (
    <>
      <Section>
        <IntroSection>
          <IntroTop>
            <Title>Lucy Lin.</Title>
          </IntroTop>
          <IntroMiddle>
            <Subtitle line>
              <SubtitleBg>HUMAN</SubtitleBg>
            </Subtitle>
          </IntroMiddle>
          <IntroDetails>
            <FeatureText strike>
              The incomplete skeletal remains of a female hominid found in eastern Ethiopia in 1974 and classified
              as Australopithecus afarensis.
            </FeatureText>
          </IntroDetails>
        </IntroSection>
      </Section>
      <Section>
        <SectionDivider>
          <SectionDividerBg>DESIGN VALUES</SectionDividerBg>
        </SectionDivider>{' '}
        <Image src={Fig1} />
      </Section>
      <Section>
        <h6>roots</h6>
        <FeatureText>
          I am a human first, designer second. <br />
          <br />
          As a human, I am driven by meaningful contribution and a deep curiosity for the human psychology. Those
          roots, combined with an inclination to create, brought me to UX design.
          <br />
          <br />
        </FeatureText>
        <h6>prep</h6>
        <FeatureText>
          Building the first UX community at University of Southern California back in 2015 got me started in the
          field. My education in psychology and design management enabled me to traverse the core of design +
          product thinking: empathy, process and business accumen.
          <br />
          <br />
        </FeatureText>
        <h6>Practice</h6>
        <FeatureText>
          Having worked at a variety of project scope, company sizes and industries, I am aptly T-shaped. In early
          days of my career, I saw myself excelling at research synthesis and rapid prototyping. But now I see my
          value really comes through as a glue, a facilitator of processes and of cross-functional efforts.
          <br />
          <br />
        </FeatureText>
        <h6>Growth</h6>
        <FeatureText>
          In future endeavours, I am looking to: <br />
          - Grow in product thinking <br />
          - Anchor myself in a meaningful industry <br />
          - Continue to hone craft and execution
          <br />
          <br />
        </FeatureText>
        <WhiteLink
          href="https://drive.google.com/file/d/1-lurzXLBq_RPXejTw7n2AZDMcLhVVVgf/view?usp=sharing"
          target="_blank"
        >
          download résumé
        </WhiteLink>
        <Image src={Fig2} />
      </Section>
    </>
  );
};

const WhiteLink = styled.a`
  font-size: 1.6em;
  line-height: 1.6em;
  font-family: 'minionBold';
  background-color: #222226;
  color: #ffffff;
  padding: 1em 2em;
  margin: 0 auto;
  display: flex;
`;

const SectionDivider = styled.h6`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #d0d0d0;
  line-height: 0.1em;
  margin: 10px 0 20px;
`;

const SectionDividerBg = styled.span`
  background: #ffffff;
  padding: 0 1em;
`;

const Image = styled.img`
  max-width: ${props => (props.small ? '40%' : '100%')};
  margin: 4em auto;
  left: ${props => (props.left ? '0' : 'auto')};
`;

const Section = styled.section`
  padding: 2em 0;
  width: 900px;
  margin: 0 auto;
`;
const IntroTop = styled.div`
  display: flex;
  padding: 0 0 2em 0;
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
`;
const SubtitleBg = styled.span`
  background: #ffffff;
  padding: 0 0.5em 0 0;
`;

const FeatureText = styled.p`
  background: ${props => (props.primary ? '#222226' : '#FFFFFF')};
  color: ${props => (props.primary ? '#FFFFFF' : '#222226')};
  font-size: 1.6em;
  line-height: 1.6em;
  text-decoration: ${props => (props.strike ? 'line-through' : 'none')};
`;

const Title = styled.p`
  font-family: minionBold;
  font-size: 4em;
  color: #222226;
`;

const IntroSection = styled.div``;

const IntroDetails = styled.div``;

export default AboutIntro;
