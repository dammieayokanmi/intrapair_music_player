import React, { useState } from 'react'
import styled from 'styled-components'
import man from '../assets/man.png'
import man2 from '../assets/man2.png'
import angles from '../assets/angles.png'
import waterMark from '../assets/water-mark.png'
import smallCirlce from '../assets/small-circle.png'
import bigCircle from '../assets/big-circle.png'
import { Player, SideBar, Header } from '../components'
import tracks from './tracks'

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: max-content 1fr; */
  .main {
    background-color: #000;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;

    padding: 20px;
  }

  .bg-img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('${man}');
    position: absolute;
    right: -68px;
    top: 0;
    height: 100%;
    width: 45%;
    filter: drop-shadow(0px 100px 20px rgba(0, 0, 0, 0.25));
    @media only screen and (max-width: 600px) {
    right: 3px;
    display:none ;
  }
  }

  .man2{
    display:none ;
    background-image: url('${man2}');
    bottom: 0;
    height: 94%;
    width: 89%;
    top: auto;
    @media only screen and (max-width: 600px) {
    display: block;

  }
  }


  .angles {
    position: absolute;
    top: 18%;
    left: 42%;
    transform: translate(-50%, -50%);
    width: 84px;
    height: 84px;
  }
  .waterMark-img {
    left: 55%;
    transform: translate(-50%, -50%);
    top: 74%;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('${waterMark}');
    position: absolute;
    width: 92%;
  }

  .circle {
    position: absolute;
  }
  .small-circle {
    bottom: 0;
    width: 200px;
    left: 40px;
  }
  .big-circle {
    right: 0;
    bottom: 0;
    width: 230px;
    height: 230px;
  }
  .icon-side-bar {
  }
  @media only screen and (max-width: 768px) {
  }
`
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper>
      <div className="icons-side-bar">
        <SideBar isOpen={isOpen} />
      </div>
      <div className="main">
        <Header onClickMenu={() => setIsOpen(!isOpen)} />
        <div>
          <Player tracks={tracks} />
          <div className="bg-img man1"></div>
          <div className="bg-img man2"></div>
          <div className="waterMark-img"></div>
          <img className="angles" src={angles} alt="angles" />
          <img className="small-circle circle" src={smallCirlce} alt="smallCirlce" />
          <img className="big-circle circle" src={bigCircle} alt="bigCircle" />
        </div>
      </div>
    </Wrapper>
  )
}

export { HomePage }
