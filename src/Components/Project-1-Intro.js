import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Project1Protected from '../Pages/Project1Protected';


const Project1 = () => {
  return (
  <div>
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
      <InnerBlockLeft> 
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
      </InnerBlockLeft>
      

    </Content>
    <Route path="/appneta-search/protected" exact component={Project1Protected} />
    </div>
  );
}
const Content = styled.div`
`; 

const Subtitle = styled.h6`
  line-height: ${props => props.line ? "0.1em" : "4em"};
  border-bottom: ${props => props.line ? "1px solid #D0D0D0" : "none"};
  margin: ${props => props.line ? "10px 0 20px" : "none"};
  width: 40%;
  padding-top: 1em;
  margin: 1em 0;
`; 
const SubtitleBg = styled.span`
  background: #FFFFFF;
  padding: 0 0.5em 0 0;
`;
const Txt = styled.p`
  font-size: 1.4em;
  line-height: 1.6em;
  padding-top: 1em;
`;

const InnerBlockLeft = styled.div`
  text-align: left;
  margin: 4em 0;
`;
const Row = styled.div`
  display: flex;
  margin: 1.4em 0;
`;
const Listln = styled.h4`
  padding: 0 0 0 1em;   
`;




export default Project1;