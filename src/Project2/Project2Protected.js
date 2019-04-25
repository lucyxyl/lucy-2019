import React from 'react';
import styled from 'styled-components';

import Cover2 from '../Image/Project2_HeaderImg.png';
import Fig1 from '../Image/Project2_Fig1.png';
import Fig2 from '../Image/Project2_Fig2.png';
import Fig3 from '../Image/Project2_Fig3.png';
import Fig4 from '../Image/Project2_Fig4.png';
import Fig5 from '../Image/Project2_Fig5.png';
import Fig6 from '../Image/Project2_Fig6.png';
import Fig7 from '../Image/Project2_Fig7.png';
import Fig8 from '../Image/Project2_Fig8.png';
import Fig9 from '../Image/Project2_Fig9.png';
import Fig10 from '../Image/Project2_Fig10.png';
import Fig11 from '../Image/Project2_Fig11.png';
import Fig12 from '../Image/Project2_Fig12.png';
import Fig13 from '../Image/Project2_Fig13.png';
import Fig14 from '../Image/Project2_Fig14.png';
import Fig15 from '../Image/Project2_Fig15.png';
import Fig16 from '../Image/Project2_Fig16.png';
import Fig17 from '../Image/Project2_Fig17.png';
import Fig18 from '../Image/Project2_Fig18.png';
import Fig19 from '../Image/Project2_Fig19.png';
import Fig20 from '../Image/Project2_Fig20.png';
import Demo1 from '../Image/Project2_Demo1.mov';
import Demo2 from '../Image/Project2_Demo2.mov';

const Project2Protected = () => {
  return (
    <>
      <Fullwidth>
        <Image src={Cover2} />
      </Fullwidth>
      <Content>
        <Block>
          <Header center>A LITTLE HISTORY</Header>
          <P center>
            Mobile Resource Library (MRL) is a content sharing tool Sales Reps at Intuitive Surgical relies on to
            engage with and seal the deal with aspiring robotic surgeons. The previous MRL no longer supported the
            dynamic pace of sales. Consequently, many forward-thinking Sales Reps (>50%) have adopted other
            creative tools in place of the MRL app to fulfill their evolving needs.
          </P>
        </Block>
        <Block>
          <SubHeader>Objective & Metrics</SubHeader>
          <P>
            "Why a redesign?"
            <br />
            <br />
            The urgency for a redesign is apparent, but we were also in search for a clear objective and
            corresponding metrics to latch on to. As we delved deeper into the context, we defined 3 main redesign
            objectives:
          </P>

          <Ol>
            <Li>Replace inefficient human-touch with digital solutions along the sales journey</Li>
            <Li>Accommodate for new use cases (offline, etc.) in content usage to stay relevant</Li>
            <Li>Improve usability pertaining to new use cases (find-ability, organization, etc.)</Li>
          </Ol>
          <br />
          <P>
            To measure success, we can compare # of sales event logs on CRM versus # of content shares on the new
            MRL. If the increased content share is correlated with reduced sales event logs, that means we’ve
            effectively reduced human touchpoint with the new designs.
          </P>
        </Block>
      </Content>

      <Fullwidth dark>
        <Block inner dark>
          <Header center dark>
            research
          </Header>
          <P center dark>
            We hosted workshops with Sales Managers from different geo-markets and interviewed 5 Clinical Sales
            Reps (CSR) to empathize and absorb the “Sales Mindset”.
            <br /> <br />
            Insights we gathered range from greater challenge of the organizational/business processes at Intuitive
            Surgical down to how individual CSR nurtures the next generation of robotic surgeons using unique and
            creative approaches. All insights eventually trickle down to the answers to one question: “how might we
            leverage content to improve engagement with our clients?”
          </P>
        </Block>
      </Fullwidth>
      <Content>
        <Block>
          <SubHeader>Structuring the Research</SubHeader>
          <P>With both the workshop and interviews, we followed a 3-stage format:</P>
          <Ol>
            <Li>Walk us through your journey</Li>
            <Li>Target use cases in your journey</Li>
            <Li>Visualize your ideal tool</Li>
          </Ol>
          <br />
          <P>
            At the first stage, we wanted the participants to walk us through their sales journey without filters.
            This open ended approach sets them at ease as it’s something they are familiar with and allows us to
            pinpoint highlights in their journey that they prioritize or is motivated by.
          </P>
          <P>
            Next, we focus-in on a couple of key use cases (ex. content search, content sharing, content
            organization and offline content). Specifically, the 5-Ws (Why, What, Who, Where, When & How) of
            content usage.
          </P>
          <P>
            Finally, we use co-creation to see what CSRs expect in a dream tool. We do this either by having
            participants sketch out their ideas or create concept cards of our hypothesis as a method to validate
            and drive conversations towards a solution.
          </P>
        </Block>

        <Block>
          <Image src={Fig1} />
        </Block>

        <Block>
          <SubHeader>Affinitizing Insights</SubHeader>
          <P>Using affinity maps, we uncovered 5 themes from the research.</P>
        </Block>
      </Content>

      <Sidewidth>
        <Block>
          <SideContainer>
            <SideLeft>
              <Image small src={Fig2} />
            </SideLeft>
            <SideRight>
              <SubHeader>Guaging Potential</SubHeader>
              <SideP>
                CSRs often leverage content consumption to guage a surgeon’s potential: sharing content early on in
                the process to see if they have the time and motivation to consume content.
              </SideP>
            </SideRight>
          </SideContainer>

          <SideContainer>
            <SideLeft>
              <Image small src={Fig3} />
            </SideLeft>
            <SideRight>
              <SubHeader>Sourcing Content</SubHeader>
              <SideP>
                Materials are refined and recycled as CSRs learn from each “batch” of sales cycle. Senior CSRs
                often package their favorite content, while their junior counterparts will build their own.
              </SideP>
            </SideRight>
          </SideContainer>

          <SideContainer>
            <SideLeft>
              <Image small src={Fig4} />
            </SideLeft>
            <SideRight>
              <SubHeader>Tracking Interactions</SubHeader>
              <SideP>
                After each engagement, CSRs personalize the sales event and keeps track of content shared, topics
                discussed in tools such as Evernote, Anatomy sketch tools, all to inform the next meet up.
              </SideP>
            </SideRight>
          </SideContainer>

          <SideContainer>
            <SideLeft>
              <Image small src={Fig5} />
            </SideLeft>
            <SideRight>
              <SubHeader>Showing vs. Sending</SubHeader>
              <SideP>
                Surgeons are busy, so CSRs must strategically filter & save snippets of content to show in a meet
                up. Since previous MRL doesn’t support bulk sharing, CSRs resort to sharing in 3rd party tools,
                where tracking is lost.
              </SideP>
            </SideRight>
          </SideContainer>

          <SideContainer>
            <SideLeft>
              <Image small src={Fig6} />
            </SideLeft>
            <SideRight>
              <SubHeader>Offline Storage</SubHeader>
              <SideP>
                Several hospitals don’t have stable internet connections. To ensure content works during meet up,
                CSRs download content ahead of the time, and then un-download afterwards to create space for
                personal device storage.
              </SideP>
            </SideRight>
          </SideContainer>
        </Block>
      </Sidewidth>

      <Fullwidth dark>
        <Block inner dark>
          <Header center dark>
            DORMANT LIGHT BULBS
          </Header>
          <P center dark>
            Hearing the stories from the Sales Reps sparked lots of dormant light bulbs. To keep track of our
            findings, I created a research synthesis matrix including insights, hypothesis, opportunities and
            validations, which eventually turned into ideas.
          </P>
        </Block>
      </Fullwidth>

      <Content>
        <Block>
          <SubHeader>Ideating Concepts</SubHeader>
          <P>
            Sketching out our ideas on concept cards helped us communicate them visually and also gave us the
            opportunity to validate those concepts during our research. This process was often done in between
            interviews.
          </P>
        </Block>
        <Block>
          <h6>Content bundling</h6> <br />
          <P>
            How might we capture the essence of content bundling as a best practice on the MRL and tie them to
            events?
          </P>
          <Image src={Fig7} />
        </Block>
        <Block>
          <h6>Consumption to Insights</h6> <br />
          <P>
            How might we leverage content consumption as a way to guide Sales Reps towards worthy and productive
            engagements?
          </P>
          <Image src={Fig8} />
        </Block>
        <Block>
          <h6>quality control</h6> <br />
          <P>
            How might we utilize peer and customer feedback to optimize and reinforce the sharing and recycling of
            quality content?
          </P>
          <Image src={Fig9} />
        </Block>
        <Block>
          <h6>Offline Solutions</h6> <br />
          <P>
            How might we streamline the offline storage without infringe on Sales Rep’s personal device storage?
          </P>
          <Image src={Fig10} />
        </Block>
        <Block>
          <SubHeader>Getting Early Buy-Ins</SubHeader>
          <P>
            We found that sketches, storyboards and Lorem Epsum were not a effective medium to present to our
            business stakeholders. Hence, I quickly prototyped some of our concepts to demo our ideas in a fidelity
            that elicited better responses.
          </P>
        </Block>
        <Block>
          <Image src={Fig11} />
          <h5>Content Collection Driven by Events</h5>
        </Block>
        <SideContainer>
          <SideLeft>
            <Image src={Fig12} />
            <h5>Bundling Content by Scenarios</h5>
          </SideLeft>
          <SideRight>
            <Image src={Fig13} />
            <h5>Auto Unsync Suggestions</h5>
          </SideRight>
        </SideContainer>
      </Content>

      <Fullwidth dark>
        <Block inner dark>
          <Header center dark>
            debating the minimum
          </Header>
          <P center dark>
            Our concepts were met with awes from the business stakeholders. However, many have concerns about the
            sweeping change and the implemention feasibility.
            <br /> <br />
            In this phase, we went through a heated debate to decide what’s the minimum viable product to weigh in
            on desirability, feasibility and viability. We worked with several business owners from learning,
            content, marketing, and sales as well as technical stakeholders to achieve this.
          </P>
        </Block>
      </Fullwidth>

      <Content>
        <Block>
          <SubHeader>Diverging</SubHeader>
          <P>
            As a tool that we hope to scale and evolve, our approach to design was to first dream the future and
            then strategize steps to reach the future. Without knowing the future we are working towards, it is
            very difficult to have foresights on current implementations that could influence future behaviors.
            <br />
            <br />
            In contrast, the approach the project owner latched onto was one characterized by “contain and ship
            fast”. With the amount of futuristic thinking we are presenting, the fear was that packing too much
            changes into one deliverable under the time crunch was not feasible, and furthermore, that Sales Reps
            may be overwhelmed by the sudden sweeping change and resort to remain in their current comfort zone.
            Due to this fear, many suggested we contain the current features but improve only the findability of
            content.
          </P>
        </Block>
        <Block>
          <SubHeader>Converging</SubHeader>
          <P>
            While we empathized with the fear, we did not want this fear to deter us from generating creativity and
            innovation or resorting to short term gains. After much deliberation, we set out to compromise. We
            addressed both fears by validating the feasibility with technical stakeholders while arriving at a MVP
            that was not too unfamiliar to the Sales Reps but promised to scale by accretion.
          </P>
        </Block>
      </Content>

      <Fullwidth>
        <Block inner>
          <H4>A Sales Enablement tool with the following experiences.</H4>
        </Block>
      </Fullwidth>
      <Sidewidth>
        <Block>
          <SideContainer>
            <SideLeft>
              <h6>My Library</h6>
              <SideP>
                Replacement for Favorites in the old tool with new organizational experience. Sales Reps are able
                to quickly save assets or organize into folders.
              </SideP>
            </SideLeft>
            <SideRight aligntop>
              <h6>CUSTOMER BRIEFCASE</h6>
              <SideP>
                Every customer target is translated to a briefcase, where all contents are tracked. Sales Reps are
                able to use those info to inform the next engagement.
              </SideP>
            </SideRight>
          </SideContainer>
        </Block>
        <Block>
          <SideContainer>
            <SideLeft>
              <h6>TRACKING INSIGHTS</h6>
              <SideP>
                Capturing engagement level of customers such as read counts, duration of opening the asset,
                independent search counts and keywords searched informs Sales Reps who, when and how to engage with
                a customer.
              </SideP>
            </SideLeft>
            <SideRight aligntop>
              <h6>SEMI-AUTOMATED SYNC/UNSYNC</h6>
              <SideP>
                We anticipate the need for syncing when Sales Reps save assets to Library or Briefcase. At these
                touchpoints, we will suggset offline sync. When storage is full, unsync suggestions comes in handy.
              </SideP>
            </SideRight>
          </SideContainer>
        </Block>
        <Block>
          <SideContainer>
            <SideLeft>
              <h6>My Library</h6>
              <SideP>
                By learning content bundling and sharing behaviors as well as lending sales expertise, content
                creation is able to serve pre-packaged content collections (content marketplace).
              </SideP>
            </SideLeft>
            <SideRight aligntop>
              <h6>PEER FEEDBACK</h6>
              <SideP>
                View counts and binary upvote or downvote from peer Sales Reps helps them guage the quality of
                content, but also informs content creation team what’s useful.
              </SideP>
            </SideRight>
          </SideContainer>
        </Block>
      </Sidewidth>

      <Fullwidth dark>
        <Block inner dark>
          <Header center dark>
            sprinting to the finish line
          </Header>
          <P center dark>
            We spent the first 3 weeks exploring and converging on a minimum viable product. As we inched closer to
            the finish line, we emulated lean UX and planned sprints to deliver the mobile design first followed by
            the web design. With card prototypes and quick testing, we iterated fast and raced to the D-day.
            <br /> <br />
            Since there were 3 designers working on the same app, a design system proved to be the secret sauce for
            speed and consistency. I was responsible for creating and maintaining the style guide.
          </P>
        </Block>
      </Fullwidth>

      <Content>
        <Block>
          <SubHeader>Information Architecture</SubHeader>
          <P>
            The skeleton of the application lies within the information architecture. The goal was to place the new
            experiences under a framework that could we understood by the Sales Reps who are used to navigating in
            the old MRL. By promoting the visibility of Library and Briefcase, we hope users would be acquainted
            with the new concepts faster.
            <br /> <br />
            The challenge we faced was figuring out where offline management made sense in the new structure. In
            the old MRL, it was a part of the navigation as a standalone location. However, in the new MRL, offline
            content is interwoven everywhere which makes it hard to single out the experience.
            <br /> <br />
            After some debates, we settled on the following structure - a sample of many.
          </P>
        </Block>
        <Block>
          <Image src={Fig14} />
        </Block>
        <Block>
          <Image src={Fig15} />
        </Block>
        <Block>
          <SubHeader>Design System</SubHeader>
          <P>
            Prior to pushing pixels, I created a componentized style guide to keep our designs consistent. The
            template evolved and grew as new components were needed. This was the style guide the team used early
            on in the design process.
          </P>
        </Block>

        <Block>
          <Image src={Fig16} />
        </Block>
        <Block>
          <SubHeader>Interaction Design</SubHeader>
          <P>
            The following showcases a couple of screens & components I designed and the evolution each went
            through.
          </P>
        </Block>
        <Block>
          <h6>Content cards</h6>
          <P>
            Content card is the building block of all pages. With the need to indicate different states, offer
            feedbacks and enable a multitude of actions user can perform on a content, a simple box with title and
            subtitle doesn’t cut it.
          </P>
          <Image src={Fig17} />

          <P>
            I considered typography, size, padding, color, iconography and scalability before arriving at a
            blueprint that works for all pages with few modifications to serve unique purposes in different pages.
          </P>
        </Block>
        <Block>
          <h6>action menu</h6>
          <P>I experimented with several ways of pulling up the action menu from content tiles.</P>
          <Image src={Fig18} />
          <P>
            Although long hold is not a easily discoverable interaction pattern. It proved to render the cleanest
            and most scalable design.
          </P>
          <Image src={Fig19} />
        </Block>
        <Block>
          <h6>Filter</h6>
          <P>
            As we are designing the filters, the content taxonomy were evolving and not ready for the world yet. As
            a result, my final design addressed first 3 levels of filter, which were specialty, procedure, and
            media type, and left the rest in a filter icon open to incoming new filters. The following iterations
            were reflective of our insights from the mental models of Sales Reps as they find new content.{' '}
          </P>
          <Image src={Fig20} />
        </Block>
      </Content>

      <Fullwidth dark>
        <Block inner dark>
          <Header dark center>
            Mobile Resource Library 2.0
          </Header>
          <H4>Selected interactions highlighting the search/filter flow & the content management flow.</H4>
          <SideContainer>
            <SideLeft>
              <Video loop autoPlay control muted src={Demo1} />
            </SideLeft>
            <SideRight>
              <SubHeader dark>3 Mechanisms of Filter</SubHeader>
              <P dark>Scoped Search applied to Heavy Use Cases</P>
              <P dark>Tabbed Filters Applied to Media Types</P>
              <P dark>More Filters After Search Term</P>
            </SideRight>
          </SideContainer>
          <SideContainer>
            <SideLeft>
              <Video loop autoPlay muted control src={Demo2} />
            </SideLeft>
            <SideRight>
              <SubHeader dark>Account Management</SubHeader>
              <P dark>Bundle Content with Multi-select</P>
              <P dark>Add to Multiple Contact without Losing Track</P>
              <P dark>Auto-detect and suggest content to download</P>
            </SideRight>
          </SideContainer>
        </Block>
      </Fullwidth>
    </>
  );
};

const H4 = styled.h4`
  text-align: center;
`;
const Sidewidth = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
const SideP = styled.p`
  font-size: 1.3em;
`;
const SideContainer = styled.div`
  position: relative;
  display: flex;
  margin: 4em auto;
`;
const SideLeft = styled.div`
  flex: 1;
  margin-right: 2em;
`;
const SideRight = styled.div`
  flex: 1;
  margin-left: 2em;
  align-self: ${props => (props.aligntop ? 'flex-start' : 'center')};
`;
const Image = styled.img`
  max-width: ${props => (props.small ? '68%' : '100%')};
  padding-bottom: 1em;
  margin: 0 auto;
  display: flex;
`;

const Video = styled.video`
  max-width: 80%;
  padding-bottom: 1em;
  margin: 0 auto;
  display: flex;
`;

const Fullwidth = styled.div`
  width: 100vw;
  background-color: ${props => (props.dark ? '#222226' : '#FFFFFF')};
  margin: 0;
  padding: 0;
`;

const Block = styled.div`
  margin: ${props => (props.big ? '8em auto' : '4em auto')};
  padding: ${props => (props.dark ? '6em 0' : '0')};
  background-color: ${props => (props.dark ? '#222226' : '#FFFFFF')};
  width: ${props => (props.inner ? '800px' : 'auto')};
`;

const Header = styled.h2`
  color: ${props => (props.dark ? '#FFFFFF' : '#222226')};
  padding: ${props => (props.dark ? '0 0 1em 0' : '1em 0')};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

const SubHeader = styled.h3`
  color: ${props => (props.dark ? '#FFFFFF' : '#222226')};
  padding: 0 0 0.4em 0;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

const P = styled.p`
  color: ${props => (props.dark ? '#FFFFFF' : '#48474C')};
  font-size: 1.4em;
  text-align: ${props => (props.center ? 'center' : 'left')};
  padding: 0 0 1em 0;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 800px;
`;

const Ol = styled.ol`
  padding-inline-start: 40px;
`;

const Li = styled.li`
  font-family: minionRegular;
  color: ${props => (props.dark ? '#FFFFFF' : '#48474C')};
  line-height: 1.6em;
  font-size: 1.4em;
`;
export default Project2Protected;
