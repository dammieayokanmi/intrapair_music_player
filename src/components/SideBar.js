/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import insta from '../assets/insta.svg'
import youtube from '../assets/youtube.svg'
import logo from '../assets/logo.png'

const Wrapper = styled.div`
  height: 100%;

  .icon-bar {
    width: auto;
    padding: 15px;
    display: flex;
    background: #313132;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    position: fixed;
    z-index: 3;
    height: 100%;

    justify-content: center;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  .socials {
    display: flex;
    border: 2px solid #fff;
    padding: 6px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  img.social {
    width: 15px;
    height: 15px;
  }
  .full-sideBar {
    background: rgba(37, 37, 37, 0.5);
    mix-blend-mode: normal;
    backdrop-filter: blur(100px);
    width: 300px;
    position: fixed;
    color: white;
    z-index: 3;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;
    padding-top: 191px;

    @media only screen and (max-width: 600px) {
      padding-top: 0;
    }
    @media only screen and (max-width: 425px) {
      width: 261px;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-weight: 700;
      font-size: 25px;
      line-height: 39px;
      text-align: center;
      @media only screen and (max-width: 600px) {
        gap: 2px;
        font-weight: 700;
        font-size: 21px;
      }

      a {
        color: #fff;
        font-family: 'tcm';
        &:hover {
          text-decoration: underline;
          transition: 0.3s;
        }
      }
    }
  }
  .side-bar_logo {
    display: none;
    width: 100px;
    @media only screen and (max-width: 600px) {
      display: block;
    }
  }
`
const SideBar = ({ isOpen }) => {
  return (
    <Wrapper>
      {isOpen && (
        <div className="full-sideBar">
          <img className="side-bar_logo" src={logo} alt="logo" />

          <ul className="links">
            <li>
              <a href="#">ARTISTS</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">DISCOGRAPHY</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACTS</a>
            </li>
          </ul>
          <div className="social-icons">
            <div className="">
              <img className="social twitter" src={twitter} alt="twitter" />
            </div>
            <div className="">
              <img className="social facebook" src={facebook} alt="facebook" />
            </div>
            <div className="">
              <img className="social insta" src={insta} alt="insta" />
            </div>
            <div className="">
              <img className="social youtube" src={youtube} alt="youtube" />
            </div>
          </div>
        </div>
      )}
      {!isOpen && (
        <div className="icon-bar">
          <div className="socials">
            <img className="social twitter" src={twitter} alt="twitter" />
          </div>
          <div className="socials">
            <img className="social facebook" src={facebook} alt="facebook" />
          </div>
          <div className="socials">
            <img className="social insta" src={insta} alt="insta" />
          </div>
          <div className="socials">
            <img className="social youtube" src={youtube} alt="youtube" />
          </div>
        </div>
      )}
    </Wrapper>
  )
}

export { SideBar }
