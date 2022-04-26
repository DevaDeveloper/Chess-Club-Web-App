import React, { FC } from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import Logo from '../../assets/sk-kozara-logo-img.jpeg';

const Nav = styled.nav`
  height: 70px;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`;
const Li = styled.li`
  margin: 0 10px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
    transition: all 0.5s ease;
    :last-child {
      margin-right: 40px;
    }
    :hover {
      border-bottom: 1px solid lightblue;
    }
  }
`;
const LogoImg = styled.div`
  margin-left: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;
const HeadingName = styled.h3`
  color: #fff;
`;

const Navbar: FC = () => {
  const history = useHistory();

  return (
    <>
      <Nav>
        <LogoImg onClick={() => history.push('/')}>
          <img src={Logo} alt="logo" />
          <HeadingName>SK Kozara Gradiska</HeadingName>
        </LogoImg>
        <Ul>
          <Li>
            <NavLink to="/">Pocetna prva</NavLink>
          </Li>

          <Li>
            {' '}
            <NavLink to="/kontakt">Kontakt</NavLink>
          </Li>
          <Li>
            <NavLink to="/o-nama">O nama</NavLink>
          </Li>
        </Ul>
      </Nav>
    </>
  );
};

export default Navbar;
