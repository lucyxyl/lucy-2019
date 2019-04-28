import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import AboutData from '../Image/AboutData.png';

import Cover3 from '../Image/Project3_HeaderImg.png';
import Fig1 from '../Image/Project3_Fig1.png';
import Fig2 from '../Image/Project3_Fig2.png';
import Fig3 from '../Image/Project3_Fig3.png';
import Fig4 from '../Image/Project3_Fig4.png';
import Fig5 from '../Image/Project3_Fig5.png';
import Fig6 from '../Image/Project3_Fig6.png';
import Fig7 from '../Image/Project3_Fig7.png';
import Fig8 from '../Image/Project3_Fig8.png';
import Fig9 from '../Image/Project3_Fig9.png';
import Fig10 from '../Image/Project3_Fig10.png';
import Fig11 from '../Image/Project3_Fig11.png';
import Fig12 from '../Image/Project3_Fig12.png';
import Fig13 from '../Image/Project3_Fig13.png';
import Fig14 from '../Image/Project3_Fig14.png';
import Fig15 from '../Image/Project3_Fig15.png';
import Fig16 from '../Image/Project3_Fig16.png';
import Fig17 from '../Image/Project3_Fig17.png';
import Fig18 from '../Image/Project3_Fig18.png';
import Fig19 from '../Image/Project3_Fig19.png';
import Fig20 from '../Image/Project3_Fig20.png';
import Fig21 from '../Image/Project3_Fig21.png';
import Fig22 from '../Image/Project3_Fig22.png';
import Fig23 from '../Image/Project3_Fig23.png';
import Fig24 from '../Image/Project3_Fig24.png';
import Fig25 from '../Image/Project3_Fig25.png';
import Fig26 from '../Image/Project3_Fig26.png';
import Fig27 from '../Image/Project3_Fig27.png';
import Fig28 from '../Image/Project3_Fig28.png';
import Fig29 from '../Image/Project3_Fig29.png';
import Fig30 from '../Image/Project3_Fig30.png';

const Project2Protected = () => {
  return (
    <>
      <Fullwidth>
        <Image src={Cover3} />
      </Fullwidth>
      <Content>
        <Block>
          <Header center>a service ecosystem</Header>
          <P center>
            The first time I sat in a da Vinci surgical console was magical. The learning curve to manuever the
            robotic arms was almost zero.
            <br /> <br />
            In contrast, the digital touchpoints and experiences surrounding the surgical robots were disparate and
            far from intuitive.
          </P>
        </Block>
        <Block>
          <SubHeader>The Status Quo</SubHeader>
          <P>
            Today, Intuitive Surgical's digital ecosystem suffers from brand identity crisis, scattered content &
            tracking, multiple logins & accounts.
            <br />
            <br />
            As a result, our hospital and surgeon users rely on their Sales Representative as their primary
            touchpoint to access the content or services they need.
            <br />
            <br />
            With a growing portfolio of services, it's apparent that human touchpoint and manual processes are no
            longer sustainable.
          </P>
        </Block>
        <Block>
          <Image src={Fig1} />
        </Block>
        <Block>
          <SubHeader>The Vision & Goal</SubHeader>
          <P>
            In the future, we are migrating away from an experience driven by utility and towards one that's driven
            by personalized engagement. All external users will access our services through a digital Front Door -
            where deeper insights allow us to deliver content based on users' roles and preferences.
            <br />
            <br />
            The main goals were:
          </P>
          <Ul>
            <Li>Define the vision fo a united and holisticc user experience</Li>
            <Li>Consider legacy, in-flight & future service initiatives</Li>
            <Li>Develop a roadmap with feasible steps to reach there</Li>
          </Ul>
        </Block>
        <Block>
          <Header center>A taste of the future</Header>
          <P>
            Selected screens from the final concept for Dr. Medina - traces her story from a novice surgeon to a
            seasoned surgical proctor mentoring other surgeons.
          </P>
        </Block>
      </Content>
      <Sidewidth>
        <Block>
          <SideContainer>
            <SideLeft>
              <Image src={Fig2} />
            </SideLeft>
            <SideRight>
              <SubHeader>Onboarding</SubHeader>
              <SideP>
                We welcome Dr. Medina into the "da Vinci" house by reminding her why she is here. <br />
                <br />{' '}
              </SideP>
              <SideP>
                - Sense of community and role models
                <br />
                - Quick guide to the pathway of certification
                <br />
                - Resources catered to specific specialty
                <br />- Personal connection to a Clinical Rep
              </SideP>
            </SideRight>
          </SideContainer>
          <SideContainer>
            <SideLeft>
              <Image src={Fig3} />
            </SideLeft>
            <SideRight>
              <SubHeader>Nurturing</SubHeader>
              <SideP>
                We loop Dr. Medina in the “da Vinci” network by offering essential administrative tools and
                omnichannel learning support.
                <br /> <br />
              </SideP>
              <SideP>
                - At-a-Glance schedule of week
                <br />
                - Bite-sized learning on-the-go
                <br /> - Clinical Reps tracks alongside the progress
              </SideP>
            </SideRight>
          </SideContainer>
          <SideContainer>
            <SideLeft>
              <Image src={Fig4} />
            </SideLeft>
            <SideRight>
              <SubHeader>Excelling</SubHeader>
              <SideP>
                As Dr. Medina becomes a certified dV surgeon, services and insights stimulates further growth.{' '}
                <br />
                <br />
              </SideP>
              <SideP>
                - Better vision into patient surgical site
                <br />
                - Surgery insights informs optimization
                <br /> - Opportunity for further development
              </SideP>
            </SideRight>
          </SideContainer>
        </Block>
      </Sidewidth>

      <Fullwidth dark>
        <Block inner dark>
          <Header center dark>
            how we got here
          </Header>
          <P center dark>
            With a 5-week timeline, we broke down the project into 5 design sprints. Each sprint had a clear
            deliverable to be presented to project stakeholders as an incremental check-in leading up to the final
            pitch.
            <br /> <br />
          </P>
          <Image src={Fig5} />
          <P dark>
            W1 - Map service initiatives to users & corresponding user journeys
            <br />
            W2 - Develop scalable navigational model to support various use cases
            <br />
            W3 - Ideate interfaces to complement the navigational model
            <br />
            W4 - Craft compelling user stories to paint a persuasive future
            <br />
            W5 - Develop a roadmap and migration strategies to reach the future
          </P>
        </Block>
      </Fullwidth>
      <Content>
        <Block>
          <SubHeader>Picking Up the Scatter</SubHeader>
          <P>
            With a tight timeline, we relied on SMEs and past researches as references to build empathy with the
            ins and outs of an operation room.
          </P>

          <Image src={Fig6} />
          <h5>
            Working with our researcher, we uncovered numerous early insights by revisiting the typical workflow
            and pain points of an operating room from a past research with surgical teams.
          </h5>
        </Block>
      </Content>
      <Sidewidth>
        <Block>
          <SideContainer>
            <SideLeft>
              <Image src={Fig7} />
            </SideLeft>
            <SideRight>
              <SubHeader>Outdated Preference Cards</SubHeader>
              <SideP>
                A preference card is a checklist of equipment for a particular surgery. It's often outdated or
                painful to edit. Consequently, this can cause delay and mistakes.
              </SideP>
            </SideRight>
          </SideContainer>
          <SideContainer>
            <SideLeft>
              <Image src={Fig8} />
            </SideLeft>
            <SideRight>
              <SubHeader>Mismatch in OR Experience</SubHeader>
              <SideP>
                OR team directly impact the tools needed, duration and success of a surgery. Often, experience of
                OR staff is not guaranteed.
              </SideP>
            </SideRight>
          </SideContainer>
          <SideContainer>
            <SideLeft>
              <Image src={Fig9} />
            </SideLeft>
            <SideRight>
              <SubHeader>Device Centric Storage</SubHeader>
              <SideP>
                Robotics systems capture meaningful media from surgeries. Storing them locally inhibits greater
                distribution and usage of this data.
              </SideP>
            </SideRight>
          </SideContainer>
        </Block>
      </Sidewidth>
      <Content>
        <Block>
          <SubHeader>Thinking Big</SubHeader>
          <P>
            As a part of our discovery, I explored the following design opportunities for future service
            initiatives based on the above pain points.{' '}
          </P>
        </Block>
      </Content>
      <Sidewidth>
        <SideContainer>
          <SideLeft>
            <h6>Digital Preference Cards</h6>
            <P>
              Leveraging past data entry records to auto-update the preference card to the needs of specific
              surgeon users and type of surgery.
            </P>
          </SideLeft>
          <SideRight center>
            <h1>1.</h1>
          </SideRight>
        </SideContainer>

        <SideContainer>
          <SideLeft center>
            <h1>2.</h1>
          </SideLeft>
          <SideRight>
            <h6>TEAM VIEW OF TRAINING</h6>
            <P>
              Providing transparency into individual’s level of training at a coordinator level - to enable
              premeditated matching.
            </P>
          </SideRight>
        </SideContainer>
        <SideContainer>
          <SideLeft>
            <h6>CLOUD DATA STORAGE</h6>
            <P>
              Removing the need for intra-device transfer or download. Consequently, this enables greater usage of
              captured insights for future learning.
            </P>
          </SideLeft>
          <SideRight center>
            <h1>3.</h1>
          </SideRight>
        </SideContainer>
      </Sidewidth>
      <Content>
        <Block>
          <P>
            In the end, this exercise served as more of an exploration of future service initiatives as we
            visualize an ideal digital ecosystem. For the purpose of this project, we are strictly focused on
            placing the initiatives that are currently available or on the roadmap. <br /> <br />
            However, understanding the domain expertise of an operating room allowed us to prioritize existing
            services that address these pain points but also empathize with the various users involved in a healthy
            OR.
          </P>
          <SubHeader>Finding a Home for Services</SubHeader>
          <P>
            I led the Affinity mapping exercises that helped us unpack a long list of service initiatives and find
            a home for them on the master user journey.
          </P>
        </Block>
        <Block>
          <Image src={Fig10} />
        </Block>
        <Block>
          <Quote>
            Understanding how surgical teams run an operating room was as important as understanding how we support
            a successful one.
          </Quote>
        </Block>
        <Block>
          <SubHeader>Identifying Pattern</SubHeader>
          <P>
            After mapping services to various users, we found 3 prominent stages of the user journey for all
            surgeon and hospital users. This cyclical user journey starts and ends with training.
          </P>
        </Block>
      </Content>
      <Sidewidth>
        <SideContainer>
          <SideLeft>
            <Image src={Fig11} />
          </SideLeft>
          <SideRight>
            <SubHeader>Training</SubHeader>
            <SideP>
              In this stage, Surgeon & OR team tracks their training progress along the pathway to be robotic
              certified.
            </SideP>
          </SideRight>
        </SideContainer>

        <SideContainer>
          <SideLeft>
            <Image src={Fig12} />
          </SideLeft>
          <SideRight>
            <SubHeader>Prep-ing</SubHeader>
            <SideP>
              Once certified, the focus shifts from learning to simulating & doing their first robotic surgery.
              Scheduling, coordinating, reviewing patient scans prevails here.
            </SideP>
          </SideRight>
        </SideContainer>

        <SideContainer>
          <SideLeft>
            <Image src={Fig13} />
          </SideLeft>
          <SideRight>
            <SubHeader>Optimizing</SubHeader>
            <SideP>
              As surgeons matures in robotic surgery, hospital executives evaluates outcomes and adjust resource
              and human allocations to optimize performance.
            </SideP>
          </SideRight>
        </SideContainer>
        <Image src={Fig14} />
      </Sidewidth>
      <Content>
        <Header center>Charting a surgeon's experience</Header>
        <P center>
          Charting a surgeon’s experience helped us pinpoint 3 key emotional drops to anchor the highlights of our
          storytelling.
        </P>
      </Content>
      <Image src={Fig15} />

      <Content>
        <Block>
          <Header center>Interaction Design</Header>
          <P center>
            As the home and foundation for legacy, in-flight and future service initiatives, a scalable navigation
            and dashboard scheme became the most cumbersome challenge of the project. Based on the 3 key drops in
            the emotional journey of a surgeon, we started ideating and experiment with different interaction
            models to address these specific areas.{' '}
          </P>
        </Block>
        <Block>
          <SubHeader>Defining Scope</SubHeader>
          <P>
            Since we are modeling a concept, we made a decision to focus on interfaces that help us tell the story.
            The 3 highlights we wanted to capture were precisely the moments of dips in the user journey:
          </P>
          <Ul>
            <Li>Enrollment - Welcomes, guides and informs new surgeons</Li>
            <Li>
              Learning Stage - Prioritizes daily productivity while introducing access to bit-sized learnings
            </Li>
            <Li>
              Performing Stage - Mentorship & outcome driven experience to normalize the fear of incompetence
            </Li>
          </Ul>
        </Block>
        <Block>
          <SubHeader>Exploring Ideas</SubHeader>
          <P>In the early stages, we visualized a couple of models to surface and organize services.</P>
        </Block>
      </Content>
      <Sidewidth>
        <P center>Dashboard Concepts</P>
        <SideContainer>
          <SideLeft>
            <Image src={Fig16} />
            <h5>Newsfeed</h5>
          </SideLeft>
          <SideCenter>
            <Image src={Fig17} />
            <h5>Dynamic Blocks</h5>
          </SideCenter>
          <SideRight>
            <Image src={Fig18} />
            <h5>Isomorphic Blocks</h5>
          </SideRight>
        </SideContainer>
        <P center>Navigational Concepts</P>
        <SideContainer>
          <SideLeft>
            <Image src={Fig19} />
            <h5>Horizontal Dropdown</h5>
          </SideLeft>
          <SideCenter>
            <Image src={Fig20} />
            <h5>Grid Launcher</h5>
          </SideCenter>
          <SideRight>
            <Image src={Fig21} />
            <h5>Left Nav</h5>
          </SideRight>
        </SideContainer>
      </Sidewidth>
      <Content>
        <Block>
          <SubHeader>Sourcing Inspiration</SubHeader>
          <P>
            We printed out interfaces and experiences that we enjoyed from the web and started sharing what we
            liked or didn’t like as a source of inspiration.
          </P>
          <Image src={Fig22} />
        </Block>
        <Block>
          <SubHeader>Drilling Down</SubHeader>
          <P>
            With fresh inspiration in mind, I started sketching the 3-4 interfaces we wanted to show in our pitch.
          </P>
          <Image src={Fig23} />
        </Block>
        <Block>
          <SubHeader>Moving to Digital</SubHeader>
          <P>
            As we solidified our navigational model, I translated the sketches into mock ups and experimented a
            little more.
          </P>
        </Block>
      </Content>

      <Sidewidth>
        <SideContainer>
          <SideLeft>
            <Image src={Fig24} />
          </SideLeft>
          <SideRight>
            <h6>Nav 1.0 | Chapter Model</h6>
            <SideP>
              The initial idea is to enable quick access to any service from the get go or switch to a new
              function. The analogy we created alludes to the reader behavior of either starting sequentially or
              picking a random chapter to start.
            </SideP>
          </SideRight>
        </SideContainer>
        <SideContainer>
          <SideLeft>
            <Image src={Fig25} />
          </SideLeft>
          <SideRight>
            <h6>Nav 2.0 | All or Yours</h6>
            <SideP>
              Some functions do not have enough services to fill the vertical space of the left navigation, creates
              visual inconsistency & wasted space. I tried placing all the services under the side nav, with tabs
              corresponding to all or those specific to you.
            </SideP>
          </SideRight>
        </SideContainer>
        <SideContainer>
          <SideLeft>
            <Image src={Fig26} />
          </SideLeft>
          <SideRight>
            <h6>Navigation 3.0: Flexibility</h6>
            <SideP>
              In the end, we gravitated towards flexibility: A side nav that duals as a draggable component to
              customize the dashboard. An important part of storytelling the personalization power of this
              ecosystem.
            </SideP>
          </SideRight>
        </SideContainer>
        <P center>Dashboard Components</P>
        <Block>
          <Image src={Fig27} />
        </Block>
      </Sidewidth>
      <Content>
        <SubHeader>Mix & Match</SubHeader>
        <P>
          Based on what phase or what role the surgeon is in, I mix & matched the dashboard components on their
          prospective interface and organized them to reflect priority.
        </P>
      </Content>
      <Sidewidth>
        <SideContainer>
          <SideLeft>
            <Image src={Fig28} />
          </SideLeft>
          <SideCenter>
            <Image src={Fig29} />
          </SideCenter>
          <SideRight>
            <Image src={Fig30} />
          </SideRight>
        </SideContainer>
      </Sidewidth>
      <Content>
        <Block>
          <Header center>Outcome & impact</Header>
          <P center>
            My colleague worked on visualizing the story from the perspective of Operating Room Leader and
            Healthcare Exeucutives. Combined, our team lead pitched the story using our dashboard designs of
            different personas to the E-board. <br /> <br />
            The concept was officially approved and is moving into planning and execution. This was one of the
            first triumph in a project outside of robotics driven by user experience at Intuitive Surgical.
          </P>
        </Block>
      </Content>
      <Content>
        <Block>
          <SectionDivider>
            <SectionDividerBg>next up</SectionDividerBg>
          </SectionDivider>
          <Link to="/">
            <ButtonContainer>
              <ButtonChild left>
                <Title>About Me</Title>
                {/* <Subtitle>me</Subtitle> */}
              </ButtonChild>
              <ButtonChild>
                <Image nextBtnImg src={AboutData} />
              </ButtonChild>
            </ButtonContainer>
          </Link>
        </Block>
      </Content>
    </>
  );
};

const ButtonChild = styled.div`
  flex: ${props => (props.left ? '2' : '1')};
  padding: ${props => (props.left ? '2em 0 2em 2em' : '0')};
  align-self: flex-end;
`;

const ButtonContainer = styled.div`
  background-color: #222226;
  margin: 4em auto;
  text-align: left;
  display: flex;
  max-width: 100%;
`;

const Title = styled.h3`
  color: #fff;
`;
const Subtitle = styled.h6`
  color: #fff;
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
const Quote = styled.h4`
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
  justify-content: center;
`;
const SideLeft = styled.div`
  flex: 1;
  padding-right: 2em;
  text-align: ${props => (props.center ? 'center' : 'left')};
  align-self: ${props => (props.aligntop ? 'flex-start' : 'center')};
`;
const SideCenter = styled.div`
  flex: 1;
  align-self: center;
`;
const SideRight = styled.div`
  flex: 1;
  padding-left: 2em;
  align-self: ${props => (props.aligntop ? 'flex-start' : 'center')};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;
const Image = styled.img`
  max-width: ${props => (props.small ? '68%' : '100%')};
  padding-bottom: ${props => (props.nextBtnImg ? '0' : '1em')};
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

const Ul = styled.ul`
  padding-inline-start: 40px;
`;

const Li = styled.li`
  font-family: minionRegular;
  color: ${props => (props.dark ? '#FFFFFF' : '#48474C')};
  line-height: 1.6em;
  font-size: ${props => (props.small ? '1.3em' : '1.4em')};
`;
export default Project2Protected;
