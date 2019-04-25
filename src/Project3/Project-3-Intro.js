import React from 'react';
import styled from 'styled-components';

const Project3Intro = () => {
  return (
    <div>
      <Content>
        <h1>Shaping a Surgical Ecosystem.</h1>
        <Subtitle line>
          <SubtitleBg>INTUITIVE surgical</SubtitleBg>
        </Subtitle>
        <Txt>
          The core story of Intuitive Surgical is about equipping surgeons with the best tools to achieve patient
          outcome. While that story has grew quite mature, we wanted to tell another story: a story that starts
          with the surgeon, but ends with the surgical staffs, technicians, and the surrounding ecosystem.
          <br />
          <br />
          In 5 sprints, the design team worked with a wide range of SMEs to storytell this vision with rapid
          prototyping. Specifically, I led affinity mapping exercises, concepted storyboards and prototyped the
          designs for surgeon’s user story.
        </Txt>
      </Content>
    </div>
  );
};
const Content = styled.div``;

const Subtitle = styled.h6`
  line-height: ${props => (props.line ? '0.1em' : '4em')};
  border-bottom: ${props => (props.line ? '1px solid #D0D0D0' : 'none')};
  margin: ${props => (props.line ? '10px 0 20px' : 'none')};
  width: 40%;
  padding-top: 1em;
  margin: 1em 0;
`;
const SubtitleBg = styled.span`
  background: #ffffff;
  padding: 0 0.5em 0 0;
`;
const Txt = styled.p`
  font-size: 1.4em;
  line-height: 1.6em;
  padding-top: 1em;
`;

export default Project3Intro;
