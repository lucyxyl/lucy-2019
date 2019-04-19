import React from 'react';
import styled from 'styled-components';


const Project1 = () => {
  return (
    <Content>
      <h1>Scaling the Search Experience.</h1>
      <Subtitle line><SubtitleBg>Appneta</SubtitleBg></Subtitle>
      <Txt>
        Appneta enables enterprise IT teams to monitor & analyze network and application traffic across their network architecture. One of the most frequented interface is the Network Paths page. This is a live feed of performance data from all the network paths that's been deployed. The number of paths a single user looks at can range from two digits all the way up to couple thousands. For larger deployments, the query is the only way to get to paths of interest. 
        <br/><br/>
        I led the re-thinking of the query experience as a foundation to resolve the scalability bottlenecks we were experiencing.
        <br/><br/>
        During the 4 months period, I collaborated with the product, engineering and customer support to:
      </Txt>

      <Innerblock> 
        <Row>
          <h1>1.</h1>
          <Listln>Break apart the various search architectures, product entities that floated across the product.</Listln>
        </Row>
        <Row>
          <h1>2.</h1>
          <Listln>Unify stakeholders on the best first step towards the greater scalability plans.</Listln>
        </Row>
        <Row>
          <h1>3.</h1>
          <Listln>Design the MVP version and concepts of the "blue-sky" version of the query experience.</Listln>
        </Row>
        <Row>
          <h1>4.</h1>
          <Listln>Introduce workshops to encourage cross-functional info-sharing and co-creation.</Listln>
        </Row>
      </Innerblock>

      <Block>
        <SectionDivider>
          <SectionDividerBg>The story</SectionDividerBg>
        </SectionDivider>
      </Block>

      <Innerblock>
        <CenterText>Enter password to read the rest, or reach out to xinyu.lin.lucy@gmail.com</CenterText>
        <CenterText>password</CenterText>
      </Innerblock>

    </Content>
  );
}


const Content = styled.div`
  padding: 2em 30em;
  height: 40em;
`; 

const Block = styled.div`
  margin: 4em 0;
`; 

const Subtitle = styled.h6`
  line-height: ${props => props.line ? "0.1em" : "4em"};
  border-bottom: ${props => props.line ? "1px solid #D0D0D0" : "none"};
  margin: ${props => props.line ? "10px 0 20px" : "none"};
  width: 40%;
  padding-top: 1em;
`; 
const SubtitleBg = styled.span`
  background: #FFFFFF;
  padding: 0 0.5em 0 0;
`;
const Txt = styled.p`
  color: #222226;
  font-size: 1.4em;
  line-height: 1.6em;
  padding-top: 1em;
`;

const Innerblock = styled.div`
  width: 85%;
  margin: auto;
`;
const Row = styled.div`
  display: flex;
  margin: 1.4em 0;
`;
const Listln = styled.h4`
  padding: 0 0 0 1em;   
`;

const SectionDivider = styled.h6`
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid #D0D0D0; 
    line-height: 0.1em;
    margin: 10px 0 20px; 
`;

const SectionDividerBg = styled.span`
    background: #FFFFFF;
    padding: 0 1em;
`;

const CenterText = styled.h5`
    text-align: center; 
`;

export default Project1;