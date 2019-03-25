import React from 'react';
import styled from 'styled-components';

const Intro = (props) => {
    return (
    <Section>
        <IntroSection>
            <IntroTop>
                <Title>Lucy.</Title>
                <Subtitle gap>[loo-see]</Subtitle>
                <Button><a href="/">résumé</a></Button>
            </IntroTop>
            <IntroMiddle>
                <Subtitle line><SubtitleBg>Noun</SubtitleBg></Subtitle>
            </IntroMiddle>
            <IntroDetails>
                <FeatureText>
                A product designer with a knack for process & facilitation. <br/><br/>
                Notably, I worked on // scaling the network visibility tools at Appneta // experimented with a connected surgical ecosystem at Intuitive Surgical // developed an accessibility toolkit for healthcare design while studying Design Management at SCAD // among other things. <br/><br/>
                </FeatureText>
            </IntroDetails>
            
        </IntroSection>

    </Section>
 
    );
}

const Section = styled.section`
  padding: 4em 0;
`; 
const IntroTop = styled.div`
  display: flex;
  padding: 0 0 2em 0;
`; 
const IntroMiddle = styled.div`
  padding: 0 0 2em 0;
`; 

const Subtitle = styled.h4`
  line-height: ${props => props.line ? "0.1em" : "4em"};
  padding-left: ${props => props.gap ? "1em" : "0"};
  border-bottom: ${props => props.line ? "1px solid #D0D0D0" : "none"};
  margin: ${props => props.line ? "10px 0 20px" : "none"};
  width: 40%;
  font-family: MinionRegular;
`; 
const SubtitleBg = styled.span`
  background: #FFFFFF;
  padding: 0 0.5em 0 0;
`;

const FeatureText = styled.p`
  background:${props => props.primary ? "#222226" : "#FFFFFF"};
  color: ${props => props.primary ? "#FFFFFF" : "#222226"};
  font-size: 1.6em;
  line-height: 1.6em;
`;

const Button = styled.button`
  font-size: 1.6em;
  line-height: 1.6em;
  margin-left: auto;
`;

//no style given

const IntroSection = styled.div`
`; 

const Title = styled.h1`
`; 
const IntroDetails = styled.div`
`; 

export default Intro;