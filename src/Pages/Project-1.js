import React from 'react';
import styled from 'styled-components';
import ProtectedProject from '../Components/ProtectedProject';


const Project1 = () => {
  return (
    <Content>
      <h2>Scaling the Search Experience.</h2>
        <Subtitle line><SubtitleBg>Appneta</SubtitleBg></Subtitle>
        <FeatureText>
          Faced with expanding customer deployments, the previous user experience of the network-performance-monitoring tool was no longer scalable. The product team identified search as a starting point. With a small and nimble design team, while my co-designer focused on the design of currently-pushing features, I was freed up to rethink the query experience as a foundation to resolve the scalability bottlenecks. In 6 months, I collaborated with the product, engineering and customer support to:
        </FeatureText>
        <ProtectedProject />
    </Content>
  );
}


const Content = styled.div`
  padding: 2em 20em;
  height: 40em;
`; 

const Subtitle = styled.h4`
  line-height: ${props => props.line ? "0.1em" : "4em"};
  border-bottom: ${props => props.line ? "1px solid #D0D0D0" : "none"};
  margin: ${props => props.line ? "10px 0 20px" : "none"};
  width: 40%;
  font-family: MinionRegular;
  padding-top: 1em;
`; 
const SubtitleBg = styled.span`
  background: #FFFFFF;
  padding: 0 0.5em 0 0;
`;
const FeatureText = styled.p`
  color: #222226;
  font-size: 1.6em;
  line-height: 1.6em;
  padding-top: 1em;
`;


export default Project1;