import React from 'react';
import styled from 'styled-components';
import Fig1 from '../Image/NibbleFig1.png';
import Fig2 from '../Image/NibbleFig2.png';
import Fig3 from '../Image/NibbleFig3.png';
import Fig4 from '../Image/NibbleFig4.png';
import Fig5 from '../Image/NibbleFig5.png';
import Fig6 from '../Image/NibbleFig6.png';
import Fig7 from '../Image/NibbleFig7.png';
import Fig8 from '../Image/NibbleFig8.png';
import Fig9 from '../Image/NibbleFig9.png';
import Fig10 from '../Image/NibbleFig10.png';
import Fig11 from '../Image/NibbleFig11.png';
import Fig12 from '../Image/NibbleFig12.png';
import Fig13 from '../Image/NibbleFig13.png';
import Fig14 from '../Image/NibbleFig14.png';
import Fig15 from '../Image/NibbleFig15.png';
import Fig16 from '../Image/NibbleFig16.png';

const NibbleCard = () => {
  return (
    <div>
      <ParentContainer>
        <Container left>
          <Image src={Fig1} alt="fig1" />
          <Overlay>
            <OverlayText>Newsfeed Customization</OverlayText>
          </Overlay>
        </Container>
        <Container>
          <Image src={Fig2} alt="fig2" />
          <Overlay>
            <OverlayText>Mafia Moderator</OverlayText>
          </Overlay>
        </Container>
        <Container left>
          <Image src={Fig3} alt="fig3" />
          <Overlay>
            <OverlayText>OpenIDEO Inclusion Challenge</OverlayText>
          </Overlay>
        </Container>
        <Container>
          <Image src={Fig4} alt="fig4" />
          <Overlay>
            <OverlayText>Meditation Practice 中文</OverlayText>
          </Overlay>
        </Container>
        <Container left>
          <Image src={Fig5} alt="fig5" />
          <Overlay>
            <OverlayText>Smart Car A/C</OverlayText>
          </Overlay>
        </Container>
        <Container>
          <Image src={Fig6} alt="fig6" />
          <Overlay>
            <OverlayText>Banking Transfer</OverlayText>
          </Overlay>
        </Container>
        <Container left>
          <Image src={Fig7} alt="fig7" />
          <Overlay>
            <OverlayText>Surgical Documentation</OverlayText>
          </Overlay>
        </Container>
        <Container>
          <Image src={Fig8} alt="fig8" />
          <Overlay>
            <OverlayText>E-Commerce Coffee Bean</OverlayText>
          </Overlay>
        </Container>

        <Container left>
          <Image src={Fig9} alt="fig8" />
          <Overlay>
            <OverlayText>Landing Page Illustration</OverlayText>
          </Overlay>
        </Container>
        <Container>
          <Image src={Fig10} alt="fig8" />
          <Overlay>
            <OverlayText>Google Design Challenge</OverlayText>
          </Overlay>
        </Container>

        <Container left>
          <Image src={Fig11} alt="fig8" />
          <Overlay>
            <OverlayText>Day Trip Planning</OverlayText>
          </Overlay>
        </Container>
        <Container>
          <Image src={Fig12} alt="fig8" />
          <Overlay>
            <OverlayText>Booking Hostels With HostelPass</OverlayText>
          </Overlay>
        </Container>

        <Container left>
          <Image src={Fig13} alt="fig8" />
          <Overlay>
            <OverlayText>Immigration Infographics</OverlayText>
          </Overlay>
        </Container>
        <Container>
          <Image src={Fig14} alt="fig8" />
          <Overlay>
            <OverlayText>Autonomous Driving Experience Analysis</OverlayText>
          </Overlay>
        </Container>

        <Container left>
          <Image src={Fig15} alt="fig8" />
          <Overlay>
            <OverlayText>Storytelling Portuguese Expansion</OverlayText>
          </Overlay>
        </Container>
        <Container>
          <Image src={Fig16} alt="fig8" />
          <Overlay>
            <OverlayText>Internal Dev Tools</OverlayText>
          </Overlay>
        </Container>
      </ParentContainer>
    </div>
  );
};

const ParentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  position: relative;
  margin: 2em auto;
`;
const Image = styled.img`
  display: flex;
  width: 100%;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0.8;
  transition: 0.5s ease;
  background-color: #000000;

  &: hover {
    opacity: 0;
`;

const OverlayText = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: 1.6em;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 1;
  font-family: minionBold;
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 1.4em;
  }
`;

export default NibbleCard;
