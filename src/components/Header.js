import React from 'react'
import styled from 'styled-components'
import search from '../assets/search.svg'
import menu from '../assets/menu.svg'
import logo from '../assets/logo.png'

import '../index'

const Wrapper = styled.div`
  background: transparent;
  position: fixed;
  width: 91%;
  left: 9%;
  z-index: 2;
  top: 29px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
    left: 0;
  }

  .menu {
    cursor: pointer;
  }
  img.logo {
    width: 90px;
    @media only screen and (max-width: 600px) {
      visibility: hidden;
    }
  }
  .search {
    @media only screen and (max-width: 425px) {
      display: none;
    }
  }
  .rhs {
    display: flex;
    gap: 20px;
    img {
      width: 30px;
    }
  }
`
const Header = ({ onClickMenu }) => {
  return (
    <Wrapper>
      <img className="logo" src={logo} alt="logo" />
      <div className="rhs">
        <img className="search" src={search} alt="search" />
        <img onClick={onClickMenu} className="menu" src={menu} alt="menu" />
      </div>
    </Wrapper>
  )
}

export { Header }
