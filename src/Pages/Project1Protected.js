import React from 'react';
import styled from 'styled-components';
import SidebySideContent from '.././Components/SidebySideContent';

import Cover1 from '.././Image/Project1_HeaderImg.svg';
import Fig1 from '.././Image/Project1_Fig1.png';
import Fig2 from '.././Image/Project1_Fig2.png';
import Fig3 from '.././Image/Project1_Fig3.svg';
import Fig4 from '.././Image/Project1_Fig4.svg';
import Fig5 from '.././Image/Project1_Fig5.png';
import Fig6 from '.././Image/Project1_Fig6.png';
import Fig7 from '.././Image/Project1_Fig7.png';
import Fig8 from '.././Image/Project1_Fig8.svg';
import Fig9 from '.././Image/Project1_Fig9.svg';
import Fig10 from '.././Image/Project1_Fig10.svg';
import Fig11 from '.././Image/Project1_Fig11.svg';
import Fig12 from '.././Image/Project1_Fig12.png';
import Fig13 from '.././Image/Project1_Fig13.svg';
import Fig14 from '.././Image/Project1_Fig14.png';
import Fig15 from '.././Image/Project1_Fig15.png';
import Fig16 from '.././Image/Project1_Fig16.png';
import Fig17 from '.././Image/Project1_Fig17.png';
import Fig18 from '.././Image/Project1_Fig18.png';


const Project1Protected = () => {
  return (
    <ContentContainer>
      <Fullwidth>
        <Image src={Cover1} alt="cover"/>
      </Fullwidth>
      <Block>
        <Header center>A LITTLE HISTORY</Header>
        <P center>Appneta is a powerful tool. Throughout its age, the product had also developed its complexity. At the time I joined, several forces were pointing us towards fixing the underutilized, unintuitive and unintelligent search as the first step to remove the scalability bottlenecks.</P>
      </Block>

      <SidebySideContent />

      <Block big>
        <Image src={Fig1}></Image>
        <h5>Artifacts from scalability investigation and design audit I worked on in early days of this project to define priorities for scalability on the UI/UX front</h5>
      </Block>

      <Fullwidth dark> 
        <Block inner dark>
          <Header center dark>A Brief Breakdown</Header>
          <P center dark>When our product was hitting scalability bottlenecks with customers of large deployments…</P>
          <SubHeader dark>Approach</SubHeader>
          <P dark>Improve find-ability first on the page with most traction: Network Paths List Page.</P>
          <SubHeader dark>Solution</SubHeader>
          <P dark>A natural language search that filters: custom tag, path attributes, and saved filter.</P>
          <SubHeader dark>My Role</SubHeader>
          <P dark>Primary Designer: scalability investigation, feature validation, alignment & roadmapping, workshop faciliation, interaction design.</P>
          <SubHeader dark>Team</SubHeader>
          <P dark>PM, Head of Product, Engineering Manager & Senior Developer, Technical Account Manager (customer support).</P>

        </Block>
      </Fullwidth>

      <Block>
        <SubHeader>The Dilemma</SubHeader>
        <P>To resolve the scalability bottleneck, we knew that it couldn’t be done overnight. So the question came down to: “How can we patch it up with the least cost upfront?” We were faced with 2 options:</P>
        <ul>
        <Li>Delay this costly effort, improve find-ability by cheaply migrating a legacy feature “saved list” without improving ux, and rely on customer support to fight the fire for top tier customers</Li>
        <br />
        <Li>Set a vision for scaling search, move forward with a "good-enough" version in 2 sprints, and sell/reserve this mandate in the next quarters to inch towards the vision.</Li>
        </ul>
        <Block>
          <Quote>Historically, our product has leaned more towards building new capabilities than patching up for scalability bottlenecks.</Quote>
        </Block>
        <P>This is mainly because the latter does not directly translate to competitiveness in the market and also that the typical users of network monitoring tools have lower expectation of the user experience. </P>
      </Block>


      <Block>
        <SubHeader>Stuck In the Middle</SubHeader>
        <P>Prior to the alignment on the dilemma, I was asked by Head of Product to start conceptualizing what a smart search, saved filters, and tags would look like all together. As I delved into this effort, I started fearing that my design efforts would be wasted since there has yet to be an alignment on this effort.</P>
        <Block>
          <Quote>I was risking designing too much or too little and needed to hear a direct "go" from everyone.</Quote>
        </Block>
      </Block>

      <Block>
        <SubHeader>The Alignment</SubHeader>
        <P>While the problem was still fresh, I decided to call a product-engineering-design trio in for an alignment before I design too much.</P>
        <P>In this meeting, we debated on several viable roadmaps, pros and cons of each, and what the first step would be.</P>
      </Block>

      <Block>
        <Image src={Fig2}></Image>
      </Block>

      <Block>
        <P>In the end, we decided to move forward instead of stalling. We set a vision for a fully scalable search, classification, and organization model, and a rough roadmap.</P>
      </Block>

      <Block>
        <Image src={Fig3}></Image>
      </Block>

      <Block>
        <SubHeader>Validating Current State</SubHeader>
        <P>The search of concern sits on top of the Network Paths page. Before the redesign, users can employ a combination of search/filter, customize columns, and view by/sort by tools to find and custom the view that's most productive to them.</P>
        <P>Using FullStory, a session replay tool for us to gather qualitative and quantitative data of our customers interacting with our product, we learned that: </P>
        <ul>
        <Li>Keyword search & filter are both underutilized</Li>
        <br />
        <Li>Group By views became the workaround</Li>
        </ul>
      </Block>

      <Block>
        <Image src={Fig4}></Image>
        <h5>Before the redesign, the state of search, filter, group by, and column. Even combined, they weren’t sufficient in helping users get to the data they want.</h5>
      </Block>

      <Block>
        <Image src={Fig5}></Image>
        <h5>State of Filter/Search prior to redesign: focusing on the search bar drops a long list of filter entities without clear label, with terminologies that doesn’t always map to our customer’s. Search suggestions aren’t intelligent.</h5>
      </Block>

      <Block>
        <P>Results from usability test for the same page validated those finding. When we ran through the usability task to test the existing filter, 80% of our participants bypassed the filter to complete the tasks.</P>
      </Block>

      <Block>
        <Image src={Fig6}></Image>
        <h5>Reoccuring theme from usability research was the need for a “smarter” and “natural” search</h5>
      </Block>

      <Fullwidth dark> 
        <Block inner dark>
          <Header center dark>The Design Principles</Header>
          <P center dark>With an alignment on the road map and the vision for the redesign effort, I defined 3 principles as my guiding pole for the experience.</P>
          <SubHeader dark>Smart</SubHeader>
          <P dark>The search experience should anticipate and respond to user’s inputs proactively. Specifically, search suggestions should respond to both key and value search terms.</P>
          <SubHeader dark>Economical</SubHeader>
          <P dark>The search experience should hide or minimize the complexities of the search inventory, and reuse existing components and interaction model when possible.</P>
          <SubHeader dark>Personalized</SubHeader>
          <P dark>The search should intake search terms that are personalized to the customer’s management model. Whenever possible, help users navigate around our product terminologies.</P>
         
        </Block>
      </Fullwidth>

      <Block>
        <SubHeader>Learning the Human Problem</SubHeader>
        <P>I led 4 workshops with members of customer support to understand the human problems behind the scalability bottlenecks.</P>
        <P>I designed the workshops with 2 lenses</P>
        <ul>
        <Li>What's today (zoom-in)</Li>
        <br />
        <Li>What's blue sky (zoom-out) </Li>
        </ul>
      </Block>

      <Block>
        <Image src={Fig7}></Image>
        <h5>Workshop Planning and In-Progress Artifacts</h5>
      </Block>

      <Block>
        <P>Through our workshop, we defined 3 primary customer archetypes</P>
      </Block>

      <SidebySideContent />

      <Block>
        <P>We also told high level stories of how each archetypes would use our product to define popular search use cases.</P>
      </Block>

      <Block>
        <Image src={Fig8}></Image>
      </Block>

      <Block>
        <Image src={Fig9}></Image>
      </Block>

      <Block>
        <P>We decided to focus on our primary & secondary users to map their decisions point in common scenarios vs. their interactions on AppNeta, specificially those involving search. </P>
      </Block>

      <Block>
        <Image src={Fig10}></Image>
      </Block>

      <Block>
        <Image src={Fig11}></Image>
      </Block>

      <Block>
        <Header center>Interaction Design</Header>
        <P center>Appneta is a powerful tool. Throughout its age, the product had also developed its complexity. At the time I joined, several forces were pointing us towards fixing the underutilized, unintuitive and unintelligent search as the first step to remove the scalability bottlenecks.</P>
      </Block>

      <Block>
        <Image src={Fig12}></Image>
        <h5>Some of Early Explorations of Search, Tag, Saved Filter</h5>
      </Block>

      <Block>
        <SubHeader>Prioritizng User Flows</SubHeader>
        <P>Given the scope, I prioritized to work on the search user flows first since it’ll be the parent or container of all filters. As a team, the product and design team ruled out advanced editing features for later phases.</P>
      </Block>

      <Block>
        <Image src={Fig13}></Image>
        <h5>Transcription of my design planning notes</h5>
      </Block>

      <Block>
        <SubHeader>Exploring Interaction Models</SubHeader>
        <P>In prep to design the search interactions, I mapped out the different kinds of filters and their “Key:Value” pair model.</P>
      </Block>

      <Block>
        <Image src={Fig14}></Image>
        <h5>Spreadsheet of search inventory I mapped early in the design process</h5>
      </Block>

      <Block>
        <P>When I sat down to assess the filters, I realized that Path Attributes had 2 levels and Tags and Saved filter would only have 1. This meant they may differ in interaction models. </P>
      </Block>

      <Block>
        <Image src={Fig15}></Image>
        <h5>Explorations of different ways of containing filters</h5>
      </Block>

      <Block>
        <SubHeader>Defining Visual Identity for Filters</SubHeader>
        <P>It was clear that with 3 different kinds of filters containing different meaning, we need a way to differentiate them visually on the search bar.</P>
      </Block>

      <Block>
        <Image src={Fig16}></Image>
        <Image src={Fig17}></Image>
        <Image src={Fig18}></Image>
        <h5>Iterations on Visual Identity of 3 Filters</h5>
      </Block>

    </ContentContainer> 
  );
}

const ContentContainer = styled.div`
  margin: 6em auto;
`; 

const Image = styled.img`
  max-width: 100%;
  padding-bottom: 1em;
  margin: 0 auto;
`;

const Fullwidth = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  background-color: ${props => props.dark ? "#222226" : "#FFFFFF"};
`;

const Block = styled.div`
  margin: ${props => props.big ? "8em auto" : "4em auto"};
  padding: ${props => props.dark ? "6em 0" : "0"};
  background-color: ${props => props.dark ? "#222226" : "#FFFFFF"};
  width: ${props => props.inner ? "800px" : "auto"};
`;

const Header = styled.h2`
  color: ${props => props.dark ? "#FFFFFF" : "#222226"};
  padding: ${props => props.dark ? "0 0 1em 0" : "1em 0"};
  text-align: ${props => props.center ? "center" : "left"};
`;

const SubHeader = styled.h3`
  color: ${props => props.dark ? "#FFFFFF" : "#222226"};
  padding: 0 0 0.4em 0;
  text-align: ${props => props.center ? "center" : "left"};

`;

const P = styled.p`
  color: ${props => props.dark ? "#FFFFFF" : "#48474C"};
  font-size: 1.4em;
  text-align: ${props => props.center ? "center" : "left"};
  padding: 0 0 1em 0;
`;

const Quote = styled.h4`
  text-align: center;
`;

const Li = styled.li`
  font-family: minionRegular;
  color: #48474C;
  line-height: 1.6em;
  font-size: 1.4em;
`;

export default Project1Protected;