import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/sk-kozara-logo-img.jpeg';

const Nav = styled.nav`
  height: 70px;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  animation: openMenu 0.4s ease-out forwards;

  @media (max-width: 767px) {
    flex-direction: column;

    @keyframes openMenu {
      0% {
        opacity: 0;
        transform: translateY(-100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }
  @media (max-width: 480px) {
    padding: 0;
  }
`;
const Li = styled.li`
  margin: 0 10px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
    transition: all 0.5s ease;
    margin: 0 auto;
    text-align: center;
    :last-child {
      margin-right: 40px;
      @media (max-width: 480px) {
        margin-right: 0;
        text-align: center;
      }
    }
    :hover {
      border-bottom: 1px solid lightblue;
    }
  }
  @media (max-width: 480px) {
    margin-right: 0;
    text-align: center;
  }
`;
const LogoImg = styled.div`
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;
const HeadingName = styled.h3`
  color: #fff;
  text-align: center;
`;

const HamburgerMenu = styled.div`
  color: #fff;
  display: none;
  padding-top: 3px;

  @media (max-width: 767px) {
    display: flex;
    margin-left: 20px;
  }
`;

const Navbar: FC = () => {
  const history = useHistory();
  const [menu, setMenu] = useState<boolean>(true);

  const handleToggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      <Nav>
        <LogoImg onClick={() => history.push('/')}>
          <img src={Logo} alt="logo" />
          <HeadingName>SK Kozara Gradiska</HeadingName>
          <HamburgerMenu onClick={handleToggleMenu}>
            <MenuIcon />
          </HamburgerMenu>
        </LogoImg>
        {menu && (
          <Ul>
            <Li>
              <NavLink to="/">Pocetna</NavLink>
            </Li>

            <Li>
              {' '}
              <NavLink to="/kontakt">Kontakt</NavLink>
            </Li>
            <Li>
              <NavLink to="/o-nama">O nama</NavLink>
            </Li>
          </Ul>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
