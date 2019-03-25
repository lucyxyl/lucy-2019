/* eslint-disable react/style-prop-object */
import React from 'react';
import styled from 'styled-components';

const Intro = (props) => {
    return (
    <Section>
        <IntroSection>
            <IntroTop>
                <Title>Lucy.</Title>
                <Subtitle gap>[loo-see]</Subtitle>
                <Button>resume</Button>
            </IntroTop>
            <IntroMiddle>
                <Subtitle>Noun</Subtitle>
            </IntroMiddle>
            <IntroDetails>
                <FeatureText>
                A product designer with a knack for process & facilitation. <br/><br/>
                Notably, I worked on // scaling the network visibility tools at Appneta // experimented with the future of a connected service ecosystem for surgical teams at Intuitive Surgical // developed an accessibility toolkit for healthcare design while studying Design Management at SCAD // among other things. <br/><br/>
                You can scroll down for selected case studies, or if you’re short on time, feel free to consume a collection of visual artifacts from my works in Nibbles page. 
                </FeatureText>
            </IntroDetails>
            
        </IntroSection>
        


    </Section>
 
    );
}

const Section = styled.section`
  padding: 4em 20em;
`; 

const IntroSection = styled.div`
`; 
const Title = styled.h1`
 
`; 
const Subtitle = styled.h4`
    line-height: 4em;
    padding-left: ${props => props.gap ? "1em" : "0"};
`; 

const IntroTop = styled.div`
  display: flex;
  padding: 0 0 1em 0;
`; 
const IntroMiddle = styled.div`
    padding: 0 0 1em 0;
`; 
const IntroDetails = styled.div`
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

export default Intro;