import React from 'react';
import styled from 'styled-components';

const Project2Intro = () => {
  return (
    <div>
      <section className="wrap">
        <h1>Recontextualizing Sales Content.</h1>
        <Subtitle line>
          <SubtitleBg>intuitive surgical</SubtitleBg>
        </Subtitle>
        <Txt>
          Intuitive Surgical is the home of surgical robots, enabling surgeons to achieve minimally invasive
          surgeries. Onboarding a surgeon to this venture involves quite a bit of content sharing, and the previous
          tool wasn’t holding up.
          <br />
          <br />
          The UX team had an opportunity to redesign the tool with renewed context into our core users’ journey.
          Specifically, I led the search and sharing flows of the responsive app.
          <br />
          <br />
          During the 12 weeks period, the design team collaborated with various sales and marketing stakeholders
          to:{' '}
        </Txt>
        <InnerBlockLeft>
          <Row>
            <h1>1.</h1>
            <Listln>Understand the sales journey and translate the context into appropriate user flow.</Listln>
          </Row>
          <Row>
            <h1>2.</h1>
            <Listln>
              Getting early and continuous buy-in from business stakeholders to define the minimum together.
            </Listln>
          </Row>
          <Row>
            <h1>3.</h1>
            <Listln>
              Design the components and interactions of the search, sharing, content management flows.
            </Listln>
          </Row>
        </InnerBlockLeft>
      </section>
    </div>
  );
};

const Subtitle = styled.h6`
  line-height: ${props => (props.line ? '0.1em' : '4em')};
  border-bottom: ${props => (props.line ? '1px solid #D0D0D0' : 'none')};
  margin: ${props => (props.line ? '10px 0 20px' : 'none')};
  width: 40%;
  padding-top: 1em;
  margin: 1em 0;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 70%;
  }
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

export default Project2Intro;
